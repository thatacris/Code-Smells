export class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public isbn: string,
    public status: "DISPONIVEL" | "EMPRESTADO" = "DISPONIVEL"
  ) {}
}
