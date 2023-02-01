import { ApiProperty } from '@nestjs/swagger'

export class AlbumDto {
    @ApiProperty({
        description: 'User ID',
        example: '3',
    })
    userId: number

    @ApiProperty({
        description: 'ID',
        example: '1',
    })
    id: number

    @ApiProperty({
        description: 'Album title',
        example: 'Roses are red',
    })
    title: string
}
