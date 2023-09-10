import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Tipo } from '../interface/Tipo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tema: string = 'numero';
  pais: number = 0;

  imgNum: string[]= ["../../assets/numbers/Numero-1.png","dos../../assets/numbers/Numero-2.png","../../assets/numbers/Numero-3.png","../../assets/numbers/Numero-4.png","../../assets/numbers/Numero-5.png"]; 
  imgAnimales: string[]= ["../../assets/Caballo.png","../../assets/Leon.png","../../assets/Aguila.png","../../assets/Elefante.png", "../../assets/Gato.png"]; 
  imgColores: string[]= ["../../assets/tema/rojo.png","../../assets/tema/azul.png","../../assets/tema/verde.png","../../assets/tema/amarillo.png","../../assets/tema/negro.png"]; 
  imgApp: string[] = this.imgNum;

  imgPais = '../../assets/pais/español.png';
  imgTema = '../../assets/numbers/Numero-1.png';

  numeros: any[] = [
    ["../../assets/audio/uno.m4a","../../assets/audio/dos.m4a","../../assets/audio/tres.m4a", "../../assets/audio/cuatro.m4a", "../../assets/audio/cinco.m4a"],
    ["../../assets/audio/um.m4a", "../../assets/audio/dois.m4a", "../../assets/audio/tres.p.m4a","../../assets/audio/quatro.m4a", "../../assets/audio/cinco.p.m4a"],
    ["../../assets/audio/one.m4a","../../assets/audio/two.m4a","../../assets/audio/three.m4a","../../assets/audio/four.m4a", "../../assets/audio/five.m4a"]];

  animales: any[] = [
    ["../../assets/audio/caballo.m4a","../../assets/audio/león.m4a","../../assets/audio/aguila.m4a", "../../assets/audio/elefante.m4a","../../assets/audio/gato.m4a"],
    ["../../assets/audio/cavalo.m4a", "../../assets/audio/leao.m4a", "../../assets/audio/aguia.m4a","../../assets/audio/elefante.p.m4a","../../assets/audio/gato.p.m4a"],
    ["../../assets/audio/horse.m4a","../../assets/audio/lion.m4a","../../assets/audio/eagle.m4a","../../assets/audio/elephant.m4a","../../assets/audio/cat.m4a"]];
  
  colores: any[] = [
    ["../../assets/audio/rojo.m4a","../../assets/audio/azul.m4a","../../assets/audio/verde.m4a", "../../assets/audio/amarillo.m4a", "../../assets/audio/negro.m4a"],
    ["../../assets/audio/vermelho.m4a", "../../assets/audio/azul.p.m4a", "../../assets/audio/verde.p.m4a","../../assets/audio/amarelo.m4a","../../assets/audio/preto.m4a"],
    ["../../assets/audio/red.m4a","../../assets/audio/blue.m4a","../../assets/audio/green.m4a","../../assets/audio/yellow.m4a","../../assets/audio/black.m4a"]];
      
  constructor(  private loginService: AuthService, private router: Router, ) { }

  ngOnInit() {

  }
  logout(){
    this.loginService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
  seleccionarIdioma(idioma: string){
    if (idioma === 'españa') {
      this.pais = 0;
      this.imgPais = "../../assets/pais/español.png";
    } else if (idioma === 'portugal') {
      this.pais = 1;
      this.imgPais = "../../assets/pais/portugues.png";
    } else if (idioma === 'reinoUnido') {
      this.pais = 2;
      this.imgPais = "../../assets/pais/ingles.png";
    }
  }
  async traducir(numero: number){
    let audioPath;
    switch(this.tema){
      case "color":
        audioPath = this.colores[this.pais][numero];
        break;
      case "animal":
        audioPath = this.animales[this.pais][numero];
        break;
      case "numero":
        audioPath = this.numeros[this.pais][numero];
        break;      
    }
    const audio = await new Audio(audioPath);
    audio.play();
  }
  seleccionarTipo(tema: string){

    switch(tema){
      case "color":
        this.tema = tema;
        this.imgTema = '../../assets/icon/color2.png';
        this.imgApp = this.imgColores;
        break;
      case "animal":
        this.tema = tema;
        this.imgTema = '../../assets/Leon.png';
        this.imgApp = this.imgAnimales;
        break;
      case "numero":
        this.tema = tema;
        this.imgTema = '../../assets/numbers/Numero-1.png';
        this.imgApp = this.imgNum;
        break;      
    }
  }

}
