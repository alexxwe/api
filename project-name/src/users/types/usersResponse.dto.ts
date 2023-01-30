import { ApiProperty } from '@nestjs/swagger'
import { PostDto } from './post.dto'
import { UserDto } from './user.dto'

export class UserResponseDto extends UserDto {
    @ApiProperty({
        description: 'Posts of the user',
        type: [PostDto],
    })
    posts: PostDto[]
}

//diferencia entre class interface y type
