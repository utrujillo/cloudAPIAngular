import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  address: any;
  arrCountries: any;
  arrErrors: any;
  alert: boolean;

  constructor(private userService: UsersService, private route: Router) {
    this.alert   = false;
    this.address = { display: false, textButton: 'Agregar direccion' };
  }

  ngOnInit(): void {
    this.userService.getCountries()
      .then( (response)=> {
        this.arrCountries = Object.entries(response);
      } )
      .catch( (error) => console.log( error ) )
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
            "street": formValues.street,
            "city": formValues.city,
            "country": formValues.country,
            "postalcode": formValues.postalcode
          }
        ]
      }
    }

    this.userService.create( toStore )
        .then( (response)=> {
          this.route.navigate(['/']);
        } )
        .catch( (e) => {
          if( e.status == 422 ){
            this.arrErrors = Object.entries(e.error)
            this.alert = true;
          }else
            console.log( e.error )
        } )
  }

}
