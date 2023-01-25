import { Controller, Get, Logger } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { UserDto } from './types/user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    private readonly logger: Logger

    constructor(private readonly usersService: UsersService) {
        this.logger = new Logger(this.constructor.name)
    }

    @Get('')
    @ApiOperation({
        summary: 'Get all the users',
        description: 'Returns a list of users',
    })
    @ApiResponse({
        status: 200,
        description: 'All is correct',
        type: [UserDto],
    })
    async list(): Promise<UserDto[]> {
        return this.usersService.list()
    }
}
