import { Injectable } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt'; // 1
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, 
    private readonly jwtService: JwtService // 2
  ) {}

  // Validate user credentials (username and password)
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username); // Fetch user from MySQL database
    if (user && await bcrypt.compare(password, user.password)) {
      return user; // Return user if password matches
    }
    return null; // Return null if user not found or password doesn't match
  }

  // Generate a JWT token for the authenticated user
  async login(user: any) {
    const payload = { username: user.username, sub: user.id, roles: user.roles }; // Create payload
    return {
      access_token: this.jwtService.sign(payload), // Sign and return JWT
    };
  }
}
