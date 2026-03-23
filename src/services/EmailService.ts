export class EmailService {
  enviar(dest: string, assunto: string, corpo: string): void {
    console.log(`[EMAIL] Para: ${dest} | Assunto: ${assunto}`);
  }
}
