import { ApiProperty } from '@nestjs/swagger'

export class PhotoDto {
    @ApiProperty({
        description: 'Album ID',
        example: '2',
    })
    albumId: number

    @ApiProperty({
        description: 'ID',
        example: '3',
    })
    id: number

    @ApiProperty({
        description: 'Photo title',
        example: 'Green box',
    })
    title: string

    @ApiProperty({
        description: 'URL',
        example: 'https://via.placeholder.com/600/92c952',
    })
    url: string

    @ApiProperty({
        description: 'Thumbnail URL',
        example: 'https://via.placeholder.com/150/771796',
    })
    thumbnailUrl: string
}
