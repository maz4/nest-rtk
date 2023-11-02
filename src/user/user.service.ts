import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data) {
    return await this.prismaService.user.create({ data });
  }

  async findUsers() {
    return await this.prismaService.user.findMany();
  }

  async findUserById(id: number) {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }
}
