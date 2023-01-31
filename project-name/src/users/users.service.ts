import { HttpService } from '@nestjs/axios'
import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { AlbumDto } from './types/album.dto'
import { CommentDto } from './types/comment.dto'
import { PhotoDto } from './types/photo.dto'
import { PostDto } from './types/post.dto'
import { TodoDto } from './types/todo.dto'
import { UserDto } from './types/user.dto'
import { UserResponseDto } from './types/usersResponse.dto'

@Injectable()
export class UsersService {
    private readonly logger = new Logger(this.constructor.name)

    constructor(private readonly httpService: HttpService) {}

    private async fetchData<T>(endpoint: string): Promise<T> {
        const url = `https://jsonplaceholder.typicode.com/${endpoint}`

        return (
            await lastValueFrom(
                this.httpService.get(url, {
                    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
                }),
            )
        ).data
    }

    async listUsers(limit: number, offset: number): Promise<UserDto[]> {
        const users = await this.fetchData<UserDto[]>('users')

        if (limit < 0 || offset < 0) {
            throw new BadRequestException('Negative numbers not allowed')
        }
        if (!limit) {
            limit = users.length
        }
        return users.slice(offset, offset + limit)
    }

    async getUser(id: number): Promise<UserDto> {
        return this.fetchData<UserDto>(`users/${id}`)
    }

    async getUserPosts(userId: number): Promise<PostDto[]> {
        return this.fetchData<PostDto[]>(`posts?userId=${userId}`)
    }

    async getUserComments(postId: number): Promise<CommentDto[]> {
        return this.fetchData<CommentDto[]>(`comments?postId=${postId}`)
    }

    async getUserAlbums(userId: number): Promise<AlbumDto[]> {
        return this.fetchData<AlbumDto[]>(`albums?userId=${userId}`)
    }

    async getUserPhotos(albumId: number): Promise<PhotoDto[]> {
        return this.fetchData<PhotoDto[]>(`photos?albumId=${albumId}`)
    }

    async getUserTodos(userId: number): Promise<TodoDto[]> {
        return this.fetchData<TodoDto[]>(`todos?userId=${userId}`)
    }

    async listPosts(): Promise<PostDto[]> {
        return this.fetchData<PostDto[]>('posts')
    }

    async listComments(): Promise<CommentDto[]> {
        return this.fetchData<CommentDto[]>('comments')
    }

    async listAlbums(): Promise<AlbumDto[]> {
        return this.fetchData<AlbumDto[]>('albums')
    }

    async listPhotos(): Promise<PhotoDto[]> {
        return this.fetchData<PhotoDto[]>('photos')
    }

    async listTodos(): Promise<TodoDto[]> {
        return this.fetchData<TodoDto[]>('todos')
    }

    async getAllData(id: number): Promise<UserResponseDto> {
        const user = await this.fetchData<UserDto>(`users/${id}`)
        const posts = await this.fetchData<PostDto[]>(`posts?userId=${id}`)
        const comments = await this.fetchData<CommentDto[]>(`comments?postId=${id}`)
        const albums = await this.fetchData<AlbumDto[]>(`albums?userId=${id}`)
        const photos = await this.fetchData<PhotoDto[]>(`photos?albumId=${id}`)
        const todos = await this.fetchData<TodoDto[]>(`todos?userId=${id}`)

        return {
            ...user,
            posts,
            comments,
            albums,
            photos,
            todos,
        }
    }
}
