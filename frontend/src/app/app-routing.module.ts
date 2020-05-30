import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaBuscaComponent } from './tela-busca/tela-busca.component';
import { CadastroEquipamentoComponent } from './tela-cadastro/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroServicoComponent } from './tela-cadastro/cadastro-servico/cadastro-servico.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tela-login', component: TelaLoginComponent },
  { path: 'tela-cadastro', component: TelaCadastroComponent },
  { path: 'cadastro-equipamento', component: CadastroEquipamentoComponent },
  { path: 'cadastro-servico', component: CadastroServicoComponent },
  { path: 'tela-busca', component: TelaBuscaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
