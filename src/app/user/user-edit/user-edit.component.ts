import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: any;
  address: any;
  arrCountries: any;


  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private route: Router) { 
    this.user = [];
    this.address = { display: false, textButton: 'Agregar direccion' };

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

    this.userService.getCountries()
        .then( (response)=> {
          this.arrCountries = Object.entries(response);
        } )
        .catch( (error) => console.log( error ) )
  }

  ngOnInit(): void {
    
  }

  toggleAddress(): void {
    if( this.address.display )
      this.address = { display: false, textButton: 'Agregar direccion' }
    else
      this.address = { display: true, textButton: 'Ocultar direccion' }
  }

  onSubmit(formValues: any): void {
    const toStore = {
      "user": {
        "firstname": formValues.firstname,
        "lastname": formValues.lastname,
        "email": formValues.email,
        "birthDate": formValues.birthDate,
        "addresses_attributes": [
          {
            "id": formValues.id,
            "street": formValues.street,
            "city": formValues.city,
            "country": formValues.country,
            "postalcode": formValues.postalcode
          }
        ]
      }
    }

    this.activatedRoute.params.subscribe( params => {
      this.userService.update( params.id, toStore )
        .then( (response) => {
          this.route.navigate(['/']);
        } )
        .catch( (error) => console.log( error ) )
    } ); 
  }

}
