import { Component } from '@angular/core';
import { Interface } from 'readline';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string;
  apellidos: string;
  edad: number;
  


  estudiantes: Estudiante[];

  constructor() {
    this.estudiantes = [];
    this.crearEstudiante();
  }
  
  crearEstudiante(){
    this.estudiantes.push({
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
    });
  }
}



interface Estudiante{
  nombre: string;
  apellidos: string;
  edad: number;
}
