export class CardModel {
  name: string;
  quantidade: number;
  porcentagem: string;

  constructor(name: string, quantidade: number, porcentagem: string) {
    this.name = name;
    this.quantidade = quantidade;
    this.porcentagem = porcentagem;
  }
}
