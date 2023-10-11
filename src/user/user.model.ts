import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { UserRole } from '../userRole/user-role.model';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ForeignKey(() => UserRole) // Define a foreign key relationship with the UserRole model
  @Column({
    type: DataType.STRING,
    defaultValue: 'User', // Default value for the 'role' field
  })
  role: string;

  @BelongsTo(() => UserRole) // Establish a belongs-to association with the UserRole model
  userRole: UserRole;
}
