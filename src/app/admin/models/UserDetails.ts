import {Role} from './Role';

export interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  roles: Role[];
}


