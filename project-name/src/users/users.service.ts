import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { AlbumDto } from './types/album.dto'
import { CommentDto } from './types/comment.dto'
import { PhotoDto } from './types/photo.dto'
import { PostDto } from './types/post.dto'
import { TodoDto } from './types/todo.dto'
import { UserDto } from './types/user.dto'

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

    async listUsers(): Promise<UserDto[]> {
        return this.fetchData<UserDto[]>('users')
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
}
