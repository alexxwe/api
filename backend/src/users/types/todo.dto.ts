import { ApiProperty } from '@nestjs/swagger'

export class TodoDto {
    @ApiProperty({
        description: 'User ID',
        example: '1',
    })
    userId: number

    @ApiProperty({
        description: 'ID',
        example: '3',
    })
    id: number

    @ApiProperty({
        description: 'Todo title',
        example: 'Do something',
    })
    title: string

    @ApiProperty({
        description: 'check if its completed',
        example: 'false',
    })
    completed: boolean
}
