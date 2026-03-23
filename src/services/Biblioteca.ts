import { Livro } from "../models/Livro";
import { Usuario } from "../models/Usuario";
import { Emprestimo } from "../models/Emprestimo";
import { EmailService } from "./EmailService";

export class Biblioteca {
  private livros: Livro[] = [];
  private usuarios: Usuario[] = [];
  private emprestimos: Emprestimo[] = [];

  constructor(private emailService: EmailService) {}

  adicionarLivro(titulo: string, autor: string, isbn: string): void {
    const livro = new Livro(titulo, autor, isbn);
    this.livros.push(livro);

    this.emailService.enviar(
      "admin@biblioteca.com",
      "Novo Livro",
      `Novo livro: ${titulo} de ${autor}`
    );
  }

  cadastrarUsuario(
    nome: string,
    email: string,
    tipo: "ALUNO" | "PROFESSOR" | "FUNCIONARIO"
  ): void {
    const usuario = new Usuario(nome, email, tipo);
    this.usuarios.push(usuario);

    this.emailService.enviar(
      email,
      "Bem-vindo",
      "Cadastro realizado com sucesso!"
    );
  }

  private buscarLivro(isbn: string): Livro | undefined {
    return this.livros.find(l => l.isbn === isbn);
  }

  private buscarUsuario(email: string): Usuario | undefined {
    return this.usuarios.find(u => u.email === email);
  }

  realizarEmprestimo(isbn: string, emailUsuario: string): void {
    const livro = this.buscarLivro(isbn);
    if (!livro) return console.log("Livro não encontrado");

    const usuario = this.buscarUsuario(emailUsuario);
    if (!usuario) return console.log("Usuário não encontrado");

    if (livro.status !== "DISPONIVEL") {
      return console.log("Livro indisponível");
    }

    if (usuario.livrosEmprestados >= usuario.getLimite()) {
      return console.log("Limite atingido");
    }

    livro.status = "EMPRESTADO";
    usuario.livrosEmprestados++;

    const hoje = new Date();
    const devolucao = new Date();
    devolucao.setDate(hoje.getDate() + 14);

    const emprestimo = new Emprestimo(
      livro,
      usuario,
      hoje,
      devolucao
    );

    this.emprestimos.push(emprestimo);

    this.emailService.enviar(
      usuario.email,
      "Empréstimo",
      `Você emprestou: ${livro.titulo}`
    );
  }

  calcularMulta(isbn: string, emailUsuario: string): number {
    const emprestimo = this.emprestimos.find(
      e =>
        e.livro.isbn === isbn &&
        e.usuario.email === emailUsuario &&
        e.status === "ATIVO"
    );

    return emprestimo ? emprestimo.calcularMulta() : 0;
  }
}
