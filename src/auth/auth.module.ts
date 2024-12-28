import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/users.module'; // User module to interact with MySQL database
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule for MySQL
import { User } from '../users/entities/user.entity'; // Assuming User entity is defined in the user module
import 'dotenv/config'; // To load environment variables

@Module({
  imports: [
    UserModule, // UserModule that connects with MySQL for user-related functionality
    PassportModule, // Passport module for authentication strategies
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Secret used to sign JWT
      signOptions: { expiresIn: '3600s' }, // Set token expiration to 1 hour
    }),
    TypeOrmModule.forFeature([User]), // Add User entity to TypeORM for database interaction
  ],
  providers: [
    AuthService, // AuthService for handling authentication logic
    LocalStrategy, // Strategy for local authentication (username/password)
    JwtStrategy, // JWT strategy for handling JWT-based authentication
  ],
  controllers: [AuthController], // AuthController to handle requests
})
export class AuthModule {}
