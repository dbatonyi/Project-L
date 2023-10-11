import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async register(userDto: any): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userDto.password, saltRounds);

    const newUser = await User.create({
      name: userDto.name,
      email: userDto.email,
      password: hashedPassword,
    });

    return newUser;
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }

    return null;
  }
}
