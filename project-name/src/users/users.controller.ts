import { Controller, Get, Logger } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { AlbumDto } from './types/album.dto'
import { CommentDto } from './types/comment.dto'
import { PhotoDto } from './types/photo.dto'
import { PostDto } from './types/post.dto'
import { TodoDto } from './types/todo.dto'
import { UserDto } from './types/user.dto'
import { UsersService } from './users.service'

@Controller('api')
export class UsersController {
    private readonly logger: Logger

    constructor(private readonly usersService: UsersService) {
        this.logger = new Logger(this.constructor.name)
    }

    @Get('users')
    @ApiOperation({
        summary: 'Get all the users',
        description: 'Returns a list of users',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [UserDto],
    })
    async listUsers(): Promise<UserDto[]> {
        return this.usersService.listUsers()
    }

    @Get('posts')
    @ApiOperation({
        summary: 'Get all the posts',
        description: 'Returns a list of posts',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [PostDto],
    })
    async listPosts(): Promise<PostDto[]> {
        return this.usersService.listPosts()
    }

    @Get('comments')
    @ApiOperation({
        summary: 'Get all the comments',
        description: 'Returns a list of comments',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [CommentDto],
    })
    async listComments(): Promise<CommentDto[]> {
        return this.usersService.listComments()
    }

    @Get('albums')
    @ApiOperation({
        summary: 'Get all the albums',
        description: 'Returns a list of albums',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [AlbumDto],
    })
    async listAlbums(): Promise<AlbumDto[]> {
        return this.usersService.listAlbums()
    }

    @Get('photos')
    @ApiOperation({
        summary: 'Get all the photos',
        description: 'Returns a list of photos',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [PhotoDto],
    })
    async listPhotos(): Promise<PhotoDto[]> {
        return this.usersService.listPhotos()
    }

    @Get('todos')
    @ApiOperation({
        summary: 'Get all the todos',
        description: 'Returns a list of todos',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [TodoDto],
    })
    async listTodoos(): Promise<TodoDto[]> {
        return this.usersService.listTodos()
    }
}
