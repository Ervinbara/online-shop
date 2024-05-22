export class Client {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;

  constructor(id: number = 0, name: string = '', email: string = '', password: string = '', role: string = '') {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
