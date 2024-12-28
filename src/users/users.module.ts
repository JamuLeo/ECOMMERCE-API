import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // Import the User entity
import { UserService } from './users.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Register the User entity with TypeORM
  ],
  providers: [UserService], // Provide UserService
  exports: [UserService],   // Export UserService for use in other modules
  controllers: [], // Optional, include if a controller exists
})
export class UserModule {}
