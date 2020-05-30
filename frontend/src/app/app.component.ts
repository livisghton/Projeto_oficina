import { AuthService } from './tela-login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  motrarMenu: boolean = false;

  constructor(){

  }

  // constructor( private authservice: AuthService ){

  // }

  // ngOnInit(){
  //   this.authservice.mostarMenuEmitter.subscribe(
  //     mostrar => this.motrarMenu = mostar
  //   );
  // }

}
