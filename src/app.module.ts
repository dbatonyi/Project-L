import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserRole } from './userRole/user-role.model';

import { databaseConfig } from './database.config';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    SequelizeModule.forFeature([User, UserRole]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
