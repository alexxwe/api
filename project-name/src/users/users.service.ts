import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { UserDto } from './types/user.dto'

@Injectable()
export class UsersService {
    private readonly logger = new Logger(this.constructor.name)

    constructor(private readonly httpService: HttpService) {}

    async list(): Promise<UserDto[]> {
        const url = `https://jsonplaceholder.typicode.com/users`

        return (
            await lastValueFrom(
                this.httpService.get(url, {
                    headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
                }),
            )
        ).data
    }
}
