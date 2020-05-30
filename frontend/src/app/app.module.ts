import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { routing, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomeComponent } from './home/home.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaBuscaComponent } from './tela-busca/tela-busca.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './tela-login/auth.service';
import { CadastroClienteComponent } from './tela-cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroEquipamentoComponent } from './tela-cadastro/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroServicoComponent } from './tela-cadastro/cadastro-servico/cadastro-servico.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    HomeComponent,
    TelaCadastroComponent,
    TelaBuscaComponent,
    CadastroClienteComponent,
    CadastroEquipamentoComponent,
    CadastroServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
