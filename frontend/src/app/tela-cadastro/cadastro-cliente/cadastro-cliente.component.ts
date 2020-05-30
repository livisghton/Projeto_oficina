import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  estados: any = [ 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás',
                    'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba','Paraná','Pernambuco',
                    'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
                    'São Paulo', 'Sergipe', 'Tocantins'
                ]

  constructor( 
    private router: Router,
    private fb: FormBuilder
  ) { }

  clientForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    end: new FormControl('', [Validators.required,  Validators.minLength(10)]),
    num: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    tel1: new FormControl('', [Validators.required]),
    tel2: new FormControl('', [Validators.required]),
    });

  // clientForm = this.fb.group({
  //   name: [''],
  //   sobrenome: [''],
  //   endComp: this.fb.group({
  //     end: [''],
  //     num: [''],
  //     estado: [''],
  //     cidade: [''],
  //   }),
  //   cpf: [''],
  //   email: [''],
  //   tel1: [''],
  //   tel2: ['']
  // });


  ngOnInit() {
  }

  onSubmit() {
    console.log('form', this.clientForm.value);
  }

  salvar(){
    this.router.navigate(['/tela-cadastro/cadastro-equipamento'])
    console.log("Salvo com sucesso!!!");
  }

  updateName() {
    this.clientForm.get('name').setValue('Alex')
  }

  changeEstado(e) {
    this.clientForm.get('estado').setValue(e.target.value, {
      onlySelf: true
    })
  }

}
