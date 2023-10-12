import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthMiddleware } from '../auth/auth.middleware';

@Controller('profile')
export class ProfileController {
  @Get()
  @UseGuards(AuthMiddleware) // Apply the AuthMiddleware to this route
  getProfile(@Request() req) {
    // This route is protected by the AuthMiddleware
    // If the request reaches here, the user is authenticated
    // Access user data from req['user'] and return it
    const userData = req['user'];
    return { message: 'You are logged in!', user: userData };
  }
}
