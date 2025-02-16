import { Injectable, signal } from '@angular/core';
import { CondenacaoModel } from '../models/Condenacao/condenacao.model';

@Injectable({
  providedIn: 'root',
})
export class CondenacaoService {
  listaCondenacao = signal<CondenacaoTable[]>([]);
  condenacaoT = [
    {
      nome: 'Luiz',
      sobrenome: 'Souza',
      email: 'asd@asd.com',
      motivo: 'Assim',
      submotivo: 'Então',
    },
    {
      nome: 'Robs',
      sobrenome: 'Mirando',
      email: 'asd@asd.com',
      motivo: 'Setado',
      submotivo: 'Algarismo',
    },
    {
      nome: 'Rafael',
      sobrenome: 'Souza',
      email: 'rafael@asd.com',
      motivo: 'Assim',
      submotivo: 'Algarismo',
    },
    {
      nome: 'Daniel',
      sobrenome: 'bellumat',
      email: 'daniel@asd.com',
      motivo: 'Setado',
      submotivo: 'Então',
    },
  ];

  constructor() {}

  pesquisar(item: CondenacaoModel): void {
    this.listaCondenacao.set(this.condenacaoT);
  }
}

export interface CondenacaoTable {
  nome: string;
  sobrenome: string;
  email: string;
  motivo: string;
  submotivo: string;
}
