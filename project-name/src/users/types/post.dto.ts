import { ApiProperty } from '@nestjs/swagger'

export class PostDto {
    @ApiProperty({
        description: 'User ID',
        example: '3',
    })
    userId: number

    @ApiProperty({
        description: 'Post ID',
        example: '4',
    })
    id: number

    @ApiProperty({
        description: 'Post Title',
        example: 'What is that enormous thing?',
    })
    title: string

    @ApiProperty({
        description: 'Body of the Post',
        example: 'That enormous thing came from the abyss and start to destroy everything',
    })
    body: string
}
