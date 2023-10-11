import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userDto: any): Promise<string> {
    await this.userService.register(userDto);
    return 'Registration successful';
  }

  @Post('login')
  async login(@Body() userDto: any): Promise<string> {
    const user = await this.userService.login(userDto.email, userDto.password);
    if (user) {
      return 'Login successful';
    } else {
      return 'Invalid credentials';
    }
  }
}
