import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slide0ps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }


  slides = [{
    title: "Esucha tu musica",
    subTitle: "EN CUALQUIER LADO",
    description: "Los mejores albunes, las mejores canciones. Escucha y compaarte en cualquier momento, a todas horas",
    icon: "play"
  }, {
    title: "Disfruta de nuestro reproductor",
    subTitle: "DE VIDEOS INCREIBLES",
    description: "Entra al modo de video d enuestro reproductor y obten acceso a clips, documentales y marking offs increibles de tus artistas favoritos",
    icon: "videocam"
  }, {
    title: "Accede al exclusivo",
    subTitle: "MODO DEPORTE",
    description: "Crea una playlist basada en tu actividad fisica. Ten reportes y acceso a lo que necesites, integrado con GPS!",
    icon: "bicycle"
  }]


  constructor(private router: Router, private storage: Storage) { }


  finish(){
    this.storage.set('isIntroShowed', true)
    this.router.navigateByUrl('/home')
}

  ngOnInit() {
  }

}
