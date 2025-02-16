export class CondenacaoModel {
  nome: string | null;
  sobrenome: number | null;
  email: string | null;
  motivo: string | null;
  submotivo: string | null;
  dataDistribuicao: string | null;
  dataPrazo: {};
  tipoTeste: string | null;
  tipoReversao: string | null;
  tipoPagamento: string | null;

  constructor(
    nome: string,
    sobrenome: number,
    email: string,
    motivo: string,
    submotivo: string,
    dataDistribuicao: string,
    dataPrazo: {},
    tipoTeste: string,
    tipoReversao: string,
    tipoPagamento: string
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    (this.email = email), (this.motivo = motivo);
    this.submotivo = submotivo;
    this.dataDistribuicao = dataDistribuicao;
    this.dataPrazo = dataPrazo;
    this.tipoTeste = tipoTeste;
    this.tipoReversao = tipoReversao;
    this.tipoPagamento = tipoPagamento;
  }
}
