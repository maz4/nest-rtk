import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data) {
    return await this.userRepository.create({ data });
  }

  async findUsers() {
    return await this.userRepository.findMany();
  }

  async findUserById(id: number) {
    return await this.userRepository.findById(id);
  }
}
