import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/user.repository';
import { UserService } from './user/user.service';
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserRepository, UserService],
})
export class AppModule {}
