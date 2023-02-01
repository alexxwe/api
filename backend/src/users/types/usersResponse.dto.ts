import { ApiProperty } from '@nestjs/swagger'
import { AlbumDto } from './album.dto'
import { CommentDto } from './comment.dto'
import { PhotoDto } from './photo.dto'
import { PostDto } from './post.dto'
import { TodoDto } from './todo.dto'
import { UserDto } from './user.dto'

export class UserResponseDto extends UserDto {
    @ApiProperty({
        description: 'Posts of the user',
        type: [PostDto],
    })
    posts: PostDto[]

    @ApiProperty({
        description: 'Comments of the user',
        type: [CommentDto],
    })
    comments: CommentDto[]

    @ApiProperty({
        description: 'Albums of the user',
        type: [AlbumDto],
    })
    albums: AlbumDto[]

    @ApiProperty({
        description: 'Photos of the user',
        type: [PhotoDto],
    })
    photos: PhotoDto[]

    @ApiProperty({
        description: 'Todos of the user',
        type: [TodoDto],
    })
    todos: TodoDto[]
}
