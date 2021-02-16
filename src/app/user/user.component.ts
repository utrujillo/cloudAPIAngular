import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  operationType: string;

  constructor() {
    this.operationType = '';
  }

  ngOnInit(): void {
  }

  newData(): void {
    this.operationType = 'new'
  }

  editData(): void {
    this.operationType = 'edit'
  }

}
