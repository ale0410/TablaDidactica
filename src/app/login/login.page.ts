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
  spinner = false;
  error = '';

  constructor(public auth: AuthService, public router: Router) {} /** Este es el constructor de Login */

  onLogin(form: NgForm) {   /** Esta es la función onLogin */
     this.submitted = true;
     if (form.valid) {  /** Pregunta si el formulario es válido */
       this.spinner = true;  /** Pone el spinner como true */
       this.auth.signIn(form.form.value.email, form.form.value.password)  /** Llama a la función signIn de AuthService */
         .then(() => {
              this.router.navigateByUrl('/admin');  /** Va derecho a la página de admin */
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
