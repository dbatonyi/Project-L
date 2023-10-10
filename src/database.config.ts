import { Dialect } from 'sequelize';
import * as config from '../config/dbConfig.json';
import { User } from './user/user.model';

export const databaseConfig = {
  dialect: 'postgres' as Dialect, // Explicitly cast the string to Dialect type
  host: config.development.host,
  port: 5432,
  username: config.development.username,
  password: config.development.password,
  database: config.development.database,
  models: [User], // Assuming User is imported from the appropriate file
  autoLoadModels: true,
};
