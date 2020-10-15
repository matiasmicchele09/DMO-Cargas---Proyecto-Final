import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get telefonoNoValido(){
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }

  get calleNumNoValida(){
    return this.forma.get('calleNum').invalid && this.forma.get('calleNum').touched;
  }

  get ciudadNoValida(){
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched;
  }
  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono: ['', [Validators.required, Validators.minLength(7)]],
      calleNum: ['', Validators.required, Validators.minLength(4)],
      ciudad: ['', Validators.required, Validators.minLength(4)]
    }); /* direccion: ['', [Validators.required]]el primer argumento, el '', es la inicialización, en este caso vacío */
        /* estas son VALIDACIONES SINCRONOS, el Validators.minLength.... son validadores que se pueden hacer inmediatamente y que no
        requieren interacción con servicios web o bien se ejecutan siempre en el mismo hilo */
  }

  enviar(){ console.log(this.forma);
            return Object.values(this.forma.controls).forEach(control => {
      control.markAsTouched();
    });
  }
 /* Object.values obtengo todas los valores que tenga la forma, el .controls para barrer todos los controles,
 y el forEach por cada uno de ellos. El control de la funcion de flecha es la variable que representa al controlador*/
}
