import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    // console.log(this.usuario);
    this.authService.fazerLogin( this.usuario);

  }
  
}
