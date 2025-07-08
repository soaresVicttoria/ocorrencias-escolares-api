# Ocorrências Escolares (Back-end)

## Sobre o Projeto

---

Este projeto está sendo desenvolvido como parte da qualificação prática do curso **Desenvolvedor de Sistemas** oferecido pelo [Senac MS](https://ww3.ms.senac.br/). A proposta consiste na criação de uma aplicação para gerenciamento de ocorrências escolares, desenvolvida sob demanda da Escola Estadual Presidente Vargas.

O sistema tem como objetivo digitalizar e organizar os registros de ocorrências envolvendo estudantes, promovendo agilidade, integridade e centralização das informações para fins administrativos e pedagógicos.

Sou responsável por toda a **arquitetura back-end**, garantindo performance, segurança, estruturação de dados e uma API bem definida para integração com o front-end.

## Tecnologias Utilizadas

---

- **Node.js v20.18.0** – Ambiente de execução JavaScript server-side
- **TypeScript** – Tipagem estática para maior confiabilidade do código
- **Express** – Framework para construção de APIs RESTful
- **Sequelize** – ORM para manipulação do banco de dados
- **MySQL** – Banco de dados relacional
- **dotenv** – Carregamento seguro de variáveis de ambiente
- **Swagger** – Documentação automatizada da API
- **Nodemon** – Monitoramento de alterações no código durante o desenvolvimento
- **fast-glob** – Importação dinâmica de rotas

## Estrutura de Pastas

---

src/
├── adapters/
│ └── express-adapter-router.ts
├── config/
│ ├── app.ts
│ ├── config.json
│ ├── env.ts
│ ├── middlewares.ts
│ ├── routes.ts
│ └── swagger.ts
├── controllers/
│ ├── controllersEstudante/
│ │ ├── atualizar-estudante.ts
│ │ ├── criar-estudante.ts
│ │ ├── deletar-estudante.ts
│ │ ├── listar-estudantes.ts
│ │ └── listar-estudante.ts
│ ├── controllersResponsavel/
│ │ ├── atualizar-responsavel.ts
│ │ ├── criar-responsavel.ts
│ │ ├── deletar-responsavel.ts
│ │ ├── listar-responsaveis.ts
│ │ └── listar-responsavel.ts
│ └── controllersUsuario/
│ ├── atualizar-usuario.ts
│ ├── criar-usuario.ts
│ ├── deletar-usuario.ts
│ ├── listar-usuarios.ts
│ └── listar-usuario.ts
├── interfaces/
│ └── index.ts
├── middlewares/
│ ├── body-parser.ts
│ ├── content-type.ts
│ ├── cors.ts
│ └── index.ts
├── models/
│ ├── associantions.ts
│ ├── index.ts
│ ├── estudante.ts
│ ├── ocorrencia.ts
│ ├── ocorrencia-estudante.ts
│ ├── responsavel.ts
│ └── usuario.ts
├── routes/
│ ├── rotasEstudante/
│ │ ├── atualizar-estudante.ts
│ │ ├── criar-estudante.ts
│ │ ├── deletar-estudante.ts
│ │ ├── listar-estudantes.ts
│ │ └── listar-estudante.ts
│ ├── rotasResponsavel/
│ │ ├── atualizar-responsavel.ts
│ │ ├── criar-responsavel.ts
│ │ ├── deletar-responsavel.ts
│ │ ├── listar-responsaveis.ts
│ │ └── listar-responsavel.ts
│ └── rotasUsuario/
│ ├── atualizar-usuario.ts
│ ├── criar-usuario.ts
│ ├── deletar-usuario.ts
│ ├── listar-usuarios.ts
│ └── listar-usuario.ts
├── database.ts
├── server.ts
.gitignore
nodemon.json
package.json
README.md
tsconfig.json
yarn.lockㅤㅤㅤㅤ

## Dependências

## Como Subir o Banco de Dados

## Como Rodar o Projeto Localmente

## Considerações Finais
