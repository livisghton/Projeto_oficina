import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEquipamentoComponent } from './cadastro-equipamento.component';

describe('CadastroEquipamentoComponent', () => {
  let component: CadastroEquipamentoComponent;
  let fixture: ComponentFixture<CadastroEquipamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroEquipamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
