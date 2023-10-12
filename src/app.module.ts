import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Models
import { User } from './user/user.model';
import { UserRole } from './userRole/user-role.model';

//Services
import { UserService } from './user/user.service';

//Controllers
import { UserController } from './user/user.controller';
import { ProfileController } from './profile/profile.controller';

//Database config
import { databaseConfig } from './database.config';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    SequelizeModule.forFeature([User, UserRole]),
  ],
  controllers: [UserController, ProfileController],
  providers: [UserService],
})
export class AppModule {}
