import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  arrUsers: any[];

  constructor(private userService: UsersService) {
    this.arrUsers = [];
    this.userService.getAll()
      .then( (response)=> {
        this.arrUsers = response
      } )
      .catch( (error) => console.log( error ) )
  }

  ngOnInit(): void {
  }

  printStreet(user: any): string {
    return user.addresses.length > 0 ? user.addresses[0].street : 'Sin direccion'
  }

}
