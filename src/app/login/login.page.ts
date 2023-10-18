import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userDb } from '../shared/user.inteface'; 
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login = userDb;
  pass!: string;
  submitted = false;
  mostrarSpinner: boolean = false;
  spinner = false;
  error = '';

  constructor(public auth: AuthService, public router: Router) {} /** Este es el constructor de Login */

  onLogin(form: NgForm) {   /** Esta es la función onLogin */
     this.submitted = true;
     if (form.valid) {  /** Pregunta si el formulario es válido */
      //  this.spinner = true;  /** Pone el spinner como true */
      // Muestra el spinner al hacer clic en "Iniciar Sesión"
    this.mostrarSpinner = true;

    // Aquí puedes agregar tu lógica para iniciar sesión, como realizar una solicitud HTTP.

    // Simula una demora de 2 segundos para demostración
    setTimeout(() => {
      // Oculta el spinner después de que se complete la lógica de inicio de sesión
      this.mostrarSpinner = false;

      // Agrega aquí la lógica para redirigir al usuario después de iniciar sesión
    }, 2000);
    
       this.auth.signIn(form.form.value.email, form.form.value.password)  /** Llama a la función signIn de AuthService */
         .then(() => {
              this.router.navigateByUrl('/home');  /** Va derecho a la página de home */
         })
         .catch((error) => (this.error = error))
         .finally(() => {
           this.spinner = false;
         });
     }
    
  }

  admin() {
    this.login.email = 'admin@admin.com';
    this.pass = '111111';
  }

  invitado() {
    this.login.email = 'invitado@invitado.com';
    this.pass = '222222';
  }

  usuario() {
    this.login.email = 'usuario@usuario.com';
    this.pass = '333333';
  }

  anonimo() {
    this.login.email = 'anonimo@anonimo.com';
    this.pass = '444444';
  }

  tester() {
    this.login.email = 'tester@tester.com';
    this.pass = '555555'; 
  }

}
