import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {

  user: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
    this.user = { addresses: [{}] }
    this.activatedRoute.params.subscribe( params => {
      this.userService.getUserById( params.id )
        .then( (response) => {
          this.user = response;
          if( this.user.addresses.length == 0 ){
            this.user.addresses = [
              { id: null, street: '', city: '', country: '', postalcode: '' }
            ]
          }
        } )
        .catch( (error) => console.log( error ) )
    } ); 
  }

  ngOnInit(): void {
  }

}
