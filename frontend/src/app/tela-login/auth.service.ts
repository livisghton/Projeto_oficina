import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { EventEmitter } from 'events';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;

  // mostarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router ) { }

  fazerLogin(usuario: Usuario){
    
    if(usuario.nome ===  'livisghton@gmail.com' && usuario.senha === '12345'){
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);

      // this.mostarMenuEmitter.emit(true);
    }
    else{
      this.usuarioAutenticado = false;
      // this.mostarMenuEmitter.emit(false);
    }
  }
}
