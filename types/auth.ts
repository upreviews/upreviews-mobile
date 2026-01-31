export interface ThirdPartyUserData {
  email?: string;
  fullName?: string;
  thirdPartyToken: string;
  signupType: SignupType;
}

export enum SignupType {
  PASSWORD = "PASSWORD",
  GOOGLE = "GOOGLE",
  APPLE = "APPLE",
}
