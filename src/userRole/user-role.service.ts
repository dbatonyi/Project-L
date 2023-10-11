import { Injectable } from '@nestjs/common';
import { UserRole } from './user-role.model';

@Injectable()
export class UserRoleService {
  async populateRoles(): Promise<void> {
    const roles = ['User', 'Member', 'Admin'];

    for (const role of roles) {
      await UserRole.findOrCreate({
        where: { role },
        defaults: { role },
      });
    }
  }
}
