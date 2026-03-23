import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Emprestimo {
  calcularMulta(): number {
      throw new Error("Method not implemented.");
  }
  constructor(
    public livro: Livro,
    public usuario: Usuario,
    public dataEmprestimo: Date,
    public dataDevolucao: Date,
    public status: "ATIVO" | "FINALIZADO" = "ATIVO"
  ) {}
}