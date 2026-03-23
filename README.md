Gabriel Roberto
Thais Cristina

<p1> PARTE 1 </p1>

| # | Code Smell | Localização | Problema | Refatoração Proposta | Técnica |
|---|-----------|------------|----------|----------------------|--------|
| 1 | God Class | class SistemaBiblioteca | Classe concentra múltiplas responsabilidades, dificultando entendimento e gerando efeitos colaterais | Separar em classes específicas (LivroService, UsuarioService, etc.) | Extract Class |
| 2 | Feature Envy | realizarEmprestimo | Método depende de dados internos de outras classes, violando encapsulamento | Mover regras para a classe Usuario | Move Method |
| 3 | Long Method | realizarEmprestimo | Método muito grande, realiza várias tarefas ao mesmo tempo | Dividir em métodos menores (validar, processar, registrar) | Extract Method |
| 4 | Shotgun Surgery | regra de limite (let limite = 3) | Alterações exigem mudanças em vários pontos do sistema | Centralizar regra na classe Usuario | Move Method |
| 5 | Primitive Obsession | string[][] (livros, usuarios, emprestimos) | Uso de tipos primitivos para dados complexos | Criar classes (Livro, Usuario, Emprestimo) | Replace Primitive with Object |
| 6 | Duplicate Code | loops de busca | Código repetido em vários pontos | Criar métodos reutilizáveis de busca | Extract Method |


<p1>Parte 2 — Refatorações </p1>

<p4> 1. God Class → Extract Class </p4>

**Separação de responsabilidades em serviços:**

- LivroService
- UsuarioService
- EmprestimoService
- RelatorioService
- EmailService

<p4> 2. Feature Envy → Move Method </p4>

**A lógica de limite foi movida para a classe Usuario:**

- Método getLimite()

<p4> 3. Long Method → Extract Method </p4>

**O método realizarEmprestimo foi dividido em:**

- validarEmprestimo()
- processarEmprestimo()
- registrarEmprestimo()

<p4> 4. Primitive Obsession → Replace Primitive with Object </p4>

**Substituição de arrays por objetos:**

- Livro
- Usuario
- Emprestimo

<p4> 5. Duplicate Code → Extract Method </p4>

**Criação de métodos reutilizáveis:**

- buscarLivro()
- buscarUsuario()                                               }
