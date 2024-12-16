export interface UserDetails {
  token: string;
  mobileNumber: string;
}
export interface UserDetailsTypes {
  user: UserDetails;
  auth?: UserDetails;
}
