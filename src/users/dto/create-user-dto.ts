import { IsEmail, IsNotEmpty, IsString, MinLength, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ description: 'Username of the user', example: 'LeoJamu' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'Email address of the user', example: 'leojamu@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password for the user', example: 'StrongPassword123!' })
  @IsNotEmpty()
  @MinLength(8) // Enforce minimum password length
  password: string;

  @ApiProperty({
    description: 'Roles assigned to the user',
    example: ['admin', 'user'],
  })
  @IsArray()
  @IsString({ each: true }) // Ensure every element in the array is a string
  roles: string[];
}
