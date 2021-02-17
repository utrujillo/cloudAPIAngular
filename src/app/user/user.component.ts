import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  arrUsers: any[];
  userToDelete: any;

  constructor(private userService: UsersService, private route: Router) {
    this.arrUsers = [];
    this.userToDelete = { id: 0, nombre: '', address: '' };
    this.loadUsers();
  }

  ngOnInit(): void {
  }

  loadUsers(): void{
    this.userService.getAll()
      .then( (response)=> {
        this.arrUsers = response
      } )
      .catch( (error) => console.log( error ) )
  }

  printStreet(user: any): string {
    return user.addresses.length > 0 ? user.addresses[0].street : 'Sin direccion'
  }

  confirmDelete(user: any): void{
    this.userToDelete = {
      id: user.id,
      nombre: `${user.firstname} ${user.lastname}`,
      address: user.addresses.length > 0 ? user.addresses[0].street : 'Sin direccion'
    }
  }

  onDelete(): void {
    this.userService.delete( this.userToDelete.id )
      .then( (response)=> {
        this.loadUsers();
      } )
      .catch( (error) => console.log( error ) )
  }

}
