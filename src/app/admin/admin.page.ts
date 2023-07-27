import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  temaSeleccionado:any;
  idSelect:any;
  soundHorse:any;
  soundPig:any;
  soundDog:any;
  soundCat:any;
  soundBird:any;
  soundRooster:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir() { /** Va derecho al Login */
    this.router.navigateByUrl('/login');
  }

  /** Estos son los sonidos de animales, números y colores */
  soundCaballo(){
    this.soundHorse = new Audio("../../assets/caballo.mp3");
    this.soundHorse.play();
  }

  soundCerdo(){
    this.soundPig = new Audio("../../assets/cerdo.mp3");
    this.soundPig.play();
  }

  soundPerro(){
    this.soundDog = new Audio("../../assets/perro.mp3");
    this.soundDog.play();
  }

  soundGato(){
    this.soundCat = new Audio("../../assets/gato.mp3");
    this.soundCat.play();
  }

  soundPajaro(){
    this.soundBird = new Audio("../../assets/pajaro.mp3");
    this.soundBird.play();
  }

  soundGallo(){
    this.soundRooster = new Audio("../../assets/gallo.mp3");
    this.soundRooster.play();
  }

  soundOne(){
    this.soundHorse = new Audio("../../assets/rata.mp3");
    this.soundHorse.play();
  }

  soundTwo(){
    this.soundHorse = new Audio("../../assets/toro.mp3");
    this.soundHorse.play();
  }

  soundThree(){
    this.soundHorse = new Audio("../../assets/tigre.mp3");
    this.soundHorse.play();
  }

  soundFour(){
    this.soundHorse = new Audio("../../assets/gato.mp3");
    this.soundHorse.play();
  }

  soundFive(){
    this.soundHorse = new Audio("../../assets/dragon.mp3");
    this.soundHorse.play();
  }

  soundSix(){
    this.soundHorse = new Audio("../../assets/serpiente.mp3");
    this.soundHorse.play();
  }

  soundOrange(){
    this.soundHorse = new Audio("../../assets/gato.mp3");
    this.soundHorse.play();
  }

  soundBlue(){
    this.soundHorse = new Audio("../../assets/tigre.mp3");
    this.soundHorse.play();
  }

  soundPink(){
    this.soundHorse = new Audio("../../assets/toro.mp3");
    this.soundHorse.play();
  }

  soundYellow(){
    this.soundHorse = new Audio("../../assets/rata.mp3");
    this.soundHorse.play();
  }

  soundRed(){
    this.soundHorse = new Audio("../../assets/caballo.mp3");
    this.soundHorse.play();
  }

  soundGreen(){
    this.soundHorse = new Audio("../../assets/cerdo.mp3");
    this.soundHorse.play();
  }

  public seleccionarTema(temaSeleccionado:any){
     let tema = temaSeleccionado;
     let idS = this.idSelect;
     let idAnimals:boolean;
     let idNumbers:boolean;
     let idColors:boolean;
     
     if(temaSeleccionado == 'animales')
     {
         console.log("animales");
         tema = 'animales';
         idS = document.getElementById("idAnimals")?.innerHTML;
         idAnimals = true;
         idNumbers = false;
         idColors = false;
     }
     else if(temaSeleccionado == 'numeros')
     {
         console.log("numeros");
         tema = 'numeros';
         idS = document.getElementById("idNumbers")?.innerHTML;
         idAnimals = false;
         idNumbers = true;
         idColors = false;
     }
     else if(temaSeleccionado == 'colores')
     {
         console.log("colores");
         tema = 'colores';
         idS = document.getElementById("idColors")?.innerHTML;
         idAnimals = false;
         idNumbers = false;
         idColors = true;
     }
    //  else
    //  {
    //      tema = 'animales';
    //      idS = document.getElementById("idAnimals")?.innerHTML;
    //      idAnimals = true;
    //      idNumbers = false;
    //      idColors = false;
    //  }

     return idS;
  }

}
