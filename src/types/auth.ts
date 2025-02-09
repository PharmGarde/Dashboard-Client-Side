export interface User {
  givenName: string;
  familyName: string;
  email: string;
  phoneNumber: string;
  user_role: string;
  avatar?: string;
  cognitoId?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
