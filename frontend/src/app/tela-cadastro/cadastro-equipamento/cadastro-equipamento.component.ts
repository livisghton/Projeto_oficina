import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.component.html',
  styleUrls: ['./cadastro-equipamento.component.css']
})
export class CadastroEquipamentoComponent implements OnInit {

  constructor() { }

  equipamentoFrom = new FormGroup({
    numSerie: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    defeitoCliente: new FormControl('', [Validators.required]),
    defeitoTecnico: new FormControl('', [Validators.required]),
    observacao: new FormControl('', [Validators.required]),
  });


  ngOnInit() {
  }

  onSubmit() {
    console.log('form', this.equipamentoFrom.value);
  }

}
