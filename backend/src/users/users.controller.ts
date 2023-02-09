import { Controller, DefaultValuePipe, Get, Logger, Param, ParseIntPipe, Query, Delete } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger'
import { AlbumDto } from './types/album.dto'
import { CommentDto } from './types/comment.dto'
import { PhotoDto } from './types/photo.dto'
import { PostDto } from './types/post.dto'
import { TodoDto } from './types/todo.dto'
import { UserDto } from './types/user.dto'
import { UserResponseDto } from './types/usersResponse.dto'
import { UsersService } from './users.service'

@Controller('api')
export class UsersController {
    private readonly logger: Logger

    constructor(private readonly usersService: UsersService) {
        this.logger = new Logger(this.constructor.name)
    }

    @Get('users')
    @ApiOperation({
        summary: 'Get the users',
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
        example: 2,
        required: false,
    })
    @ApiQuery({
        name: 'offset',
        description: 'Number of users to skip',
        example: 5,
        required: false,
    })
    async listUsers(
        @Query('limit', new DefaultValuePipe(0), ParseIntPipe) limit: number,
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    ): Promise<UserDto[]> {
        return this.usersService.listUsers(limit, offset)
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

    @Delete('user/:id')
    @ApiOperation({
        summary: 'Delete the User by ID',
        description: 'Delete User by ID',
    })
    @ApiResponse({
        status: 200,
        description: 'User data is deleted',
        type: Boolean,
    })
    async deleteUser(@Param('id') id: number): Promise<boolean> {
        return this.usersService.deleteUser(id)
    }

    @Get('users/:userId/posts')
    @ApiOperation({
        summary: 'Get all the posts of a specific user',
        description: 'Returns a list of posts for the selected user',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [PostDto],
    })
    async getUserPosts(@Param('userId') userId: number): Promise<PostDto[]> {
        return this.usersService.getUserPosts(userId)
    }

    @Get('users/:postId/comments')
    @ApiOperation({
        summary: 'Get all the comments of a specific user',
        description: 'Returns a list of comments for the selected user',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [CommentDto],
    })
    async getUserComment(@Param('postId') postId: number): Promise<CommentDto[]> {
        return this.usersService.getUserComments(postId)
    }

    @Get('users/:userId/albums')
    @ApiOperation({
        summary: 'Get all the albums of a specific user',
        description: 'Returns a list of albums for the selected user',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [AlbumDto],
    })
    async getUserAlbums(@Param('userId') userId: number): Promise<AlbumDto[]> {
        return this.usersService.getUserAlbums(userId)
    }

    @Get('users/:albumId/photos')
    @ApiOperation({
        summary: 'Get all the photos of a specific user',
        description: 'Returns a list of photos for the selected user',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [PhotoDto],
    })
    async getUserPhotos(@Param('albumId') albumId: number): Promise<PhotoDto[]> {
        return this.usersService.getUserPhotos(albumId)
    }

    @Get('users/:userId/todos')
    @ApiOperation({
        summary: 'Get all the todos of a specific user',
        description: 'Returns a list of todos for the selected user',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [TodoDto],
    })
    async getUserTodos(@Param('userId') userId: number): Promise<TodoDto[]> {
        return this.usersService.getUserTodos(userId)
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
    async listTodos(): Promise<TodoDto[]> {
        return this.usersService.listTodos()
    }

    @Get('users/:id/alldata')
    @ApiOperation({
        summary: 'Get all the post of a specific user',
        description: 'Returns a list of posts for the selected user',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: UserResponseDto,
    })
    async getAllData(@Param('id') id: number): Promise<UserResponseDto> {
        return this.usersService.getAllData(id)
    }
}
