import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table
export class UserRole extends Model<UserRole> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  role: string;

  @HasMany(() => User) // Establish a one-to-many association with the User model
  users: User[];
}
