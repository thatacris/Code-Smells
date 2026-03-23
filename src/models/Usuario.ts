export class Usuario {
  constructor(
    public nome: string,
    public email: string,
    public tipo: "ALUNO" | "PROFESSOR" | "FUNCIONARIO",
    public livrosEmprestados: number = 0
  ) {}

  getLimite(): number {
    switch (this.tipo) {
      case "PROFESSOR": return 10;
      case "FUNCIONARIO": return 5;
      default: return 3;
    }
  }
}