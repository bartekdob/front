export interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  description: string;
}
