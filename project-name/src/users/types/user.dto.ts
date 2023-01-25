import { ApiProperty } from '@nestjs/swagger'
class GeoDto {
    lat: string
    lng: string
}
export class UserDto {
    @ApiProperty({
        description: 'User ID',
        example: 78,
    })
    id: number

    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: GeoDto
    }

    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

// documentar teniendo de guia https://github.com/dawichi/hexastats/blob/main/backend/src/types/Rank.dto.ts

// documentar las propiedades del usuario aqui https://jsonplaceholder.typicode.com/users
