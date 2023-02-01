import { ApiProperty } from '@nestjs/swagger'

class GeoDto {
    @ApiProperty({
        description: 'Latitude',
        example: -37.3159,
    })
    lat: string

    @ApiProperty({
        description: 'Longitude',
        example: 81.1496,
    })
    lng: string
}
class AddressDto {
    @ApiProperty({
        description: 'Street name and number',
        example: 'Kulas Light',
    })
    street: string

    @ApiProperty({
        description: 'Apartment or suite number',
        example: 'Apt. 556',
    })
    suite: string

    @ApiProperty({
        description: 'City name',
        example: 'New York',
    })
    city: string

    @ApiProperty({
        description: 'Zip code',
        example: '92998-3874',
    })
    zipcode: string

    @ApiProperty({
        description: 'Geography Information',
    })
    geo: GeoDto
}
class CompanyDto {
    @ApiProperty({
        description: 'Company name',
        example: 'Acme Inc',
    })
    name: string

    @ApiProperty({
        description: 'Company catchphrase',
        example: 'We bring you the future',
    })
    catchPhrase: string

    @ApiProperty({
        description: 'Company slogan',
        example: 'Leading the way',
    })
    bs: string
}
export class UserDto {
    @ApiProperty({
        description: 'User ID',
        example: 7,
    })
    id: number

    @ApiProperty({
        description: 'Name',
        example: 'Alex',
    })
    name: string

    @ApiProperty({
        description: 'Username',
        example: 'Alexwe',
    })
    username: string

    @ApiProperty({
        description: 'Email address',
        example: 'example@gmail.com',
    })
    email: string

    @ApiProperty({
        description: 'Address Information',
    })
    address: AddressDto

    @ApiProperty({
        description: 'Phone number',
        example: '1-7x0-746-831 x542"',
    })
    phone: string

    @ApiProperty({
        description: 'Website',
        example: 'something.org',
    })
    website: string

    @ApiProperty({
        description: 'Company Information',
    })
    company: CompanyDto
}

// documentar teniendo de guia https://github.com/dawichi/hexastats/blob/main/backend/src/types/Rank.dto.ts

// documentar las propiedades del usuario aqui https://jsonplaceholder.typicode.com/users
