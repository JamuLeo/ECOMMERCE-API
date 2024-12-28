import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Specifies the table name
export class User {
  @PrimaryGeneratedColumn('uuid') // Generates a unique identifier for each user
  id: string;

  @Column({ type: 'varchar', length: 100 })
  username: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  // Uncomment if roles are added in the future
   @Column('simple-array') // Stores an array as a comma-separated string
  roles: string[];
}
