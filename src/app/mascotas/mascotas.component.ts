import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rows: Listadomascota [] = [];
  onSubmit(form: NgForm) {
    var test: Listadomascota = {nombre: form.value.nombrecompleto, raza: form.value.raza, id: this.rows.length} ;  
    this.rows.push(test);
  }

  Borrarmascota(id: number){
    this.rows= this.rows.filter(item => item.id !== id)
  }

}
 interface Listadomascota {

  nombre: string;
  raza: string;
   id: number;
}