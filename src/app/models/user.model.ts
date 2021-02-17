export class User{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;

  constructor(id: number, firstname: string, lastname: string, email: string, birthDate: string){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.birthDate = birthDate;
  }
}