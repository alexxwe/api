import { ApiProperty } from '@nestjs/swagger'

export class CommentDto {
    @ApiProperty({
        description: 'Post ID',
        example: '1',
    })
    postId: number

    @ApiProperty({
        description: 'ID inside the post',
        example: '6',
    })
    id: number

    @ApiProperty({
        description: 'Post name',
        example: 'You need to know this',
    })
    name: string

    @ApiProperty({
        description: 'commentator email',
        example: 'example@gmail.com',
    })
    email: string

    @ApiProperty({
        description: 'Body of the comment',
        example: 'Amazing, very useful examples',
    })
    body: string
}
