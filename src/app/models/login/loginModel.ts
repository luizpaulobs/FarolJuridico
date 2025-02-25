export class loginModel {
  email: string;
  password: string;
  remember: boolean;

  constructor(data: Partial<loginModel> = {}) {
    Object.assign(this, data);
  }
}
