import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';
import {AuthController } from '../auth/auth.controller';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { username, email, password, roles } = createUserDTO;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
      roles: roles ? roles.join(',') : '', // Store roles as a comma-separated string
    });

    return this.userRepository.save(newUser);
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }
}
