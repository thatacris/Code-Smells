import { Biblioteca } from "./services/Biblioteca";
import { EmailService } from "./services/EmailService";

const emailService = new EmailService();
const biblioteca = new Biblioteca(emailService);

biblioteca.adicionarLivro("Clean Code", "Robert C. Martin", "123");
biblioteca.cadastrarUsuario("Ana", "ana@email.com", "ALUNO");

biblioteca.realizarEmprestimo("123", "ana@email.com");