import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('type') operationType: string;
  modalData: any;
  address: any;
  
  constructor() {
    this.operationType = '';
    this.modalData = { title: '', label: false, buttonStore: '' }
    this.address = { display: false, textButton: 'Agregar direccion' };
  }

  ngOnInit(): void {
    if( this.operationType == 'new' ){
      this.modalData = { title: 'Nuevo Usuario', label: false, buttonStore: 'Guardar' }
    } else if( this.operationType == 'edit' ){
      this.modalData = { title: 'Editar Usuario', label: true, buttonStore: 'Actualizar' }
    }
  }

  toggleAddress(): void {
    if( this.address.display )
      this.address = { display: false, textButton: 'Agregar direccion' }
    else
      this.address = { display: true, textButton: 'Ocultar direccion' }
  }

}
