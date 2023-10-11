import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserRoleService } from './userRole/user-role.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userRoleService = app.get(UserRoleService);
  await userRoleService.populateRoles(); // Populate roles on application start
  await app.listen(3000);
}
bootstrap();
