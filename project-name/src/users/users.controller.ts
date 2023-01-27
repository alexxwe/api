import { Controller, Get, Logger, Param, ParseIntPipe, Query } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger'
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
    @ApiQuery({
        name: 'limit',
        description: 'Limit the number of users to show',
        example: 3,
        required: false,
    })
    async listUsers(@Query('limit', ParseIntPipe) limit: number): Promise<UserDto[]> {
        return this.usersService.listUsers(limit)
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

    @Get('users/:id')
    @ApiOperation({
        summary: 'Get the User by ID',
        description: 'Return User by ID',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: UserDto,
    })
    async getUser(@Param('id') id: number): Promise<UserDto> {
        return this.usersService.getUser(id)
    }
}

// also, I wanna be able to fetch /api/users?offset=3 so it returns all the users EXCEPT the first 3
// and it should work combined like /api/users?limit=2&offset=5 so it returns the user 6º and 7º
