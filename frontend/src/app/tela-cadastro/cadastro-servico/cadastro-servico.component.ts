import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css']
})
export class CadastroServicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  servicofrom =  new FormGroup({
    idServico: new FormControl('', [Validators.required]),
    prioridade: new FormControl(''),
    dataEntrada: new FormControl('', [Validators.required]),
    dataSaida: new FormControl(''),
    orcamento: new FormControl(''),
    total: new FormControl('')
  });

  onSubmit() {
    console.log('form', this.servicofrom.value);
  }
  

}
