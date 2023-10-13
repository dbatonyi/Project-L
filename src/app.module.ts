import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Models
import { User } from './user/user.model';
import { UserRole } from './userRole/user-role.model';

//Services
import { UserService } from './user/user.service';
import { PageService } from './page/page.service';

//Controllers
import { UserController } from './user/user.controller';
import { ProfileController } from './profile/profile.controller';
import { PageController } from './page/page.controller';

//Database config
import { databaseConfig } from './database.config';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig),
    SequelizeModule.forFeature([User, UserRole]),
  ],
  controllers: [UserController, ProfileController, PageController],
  providers: [UserService, PageService],
})
export class AppModule {}
