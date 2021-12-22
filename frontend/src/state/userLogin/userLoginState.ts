export interface IUserLoginState {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
  loading?: boolean;
  loginError?: string | null;
}
