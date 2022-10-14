export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  position: string | null;
}

export interface AuthState {
  user: UserState | null;
  isLoading: boolean;
  error?: string | null;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  position: string;
}