export class Admin {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(id: string, firstName: string, lastName: string, email: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
