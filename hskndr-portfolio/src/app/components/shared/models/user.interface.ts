export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: string;
  password?: string;
  photoURL?: string;
  role?: Roles;
}

export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';
