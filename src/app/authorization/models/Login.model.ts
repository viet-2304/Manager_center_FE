export class LoginBodyModel {
  public email: string;
  public password: string;
}

export class LoginResponse {
  public token: string;
  public userDto: UserInfo;
}

export class UserInfo {
  public email: string;
  public phoneNumber: string;
  public address: string;
  public userName: string;
  public roleId: string;
}

