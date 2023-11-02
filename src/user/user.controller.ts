import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTOs/create-user.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.findUsers();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  async getUser(
    @Param('id', new ValidationPipe({ transform: true })) id: number,
  ) {
    return await this.userService.findUserById(id);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  async createUser(
    @Body(new ValidationPipe({ transform: true })) data: CreateUserDto,
  ) {
    return await this.userService.createUser(data);
  }
}
