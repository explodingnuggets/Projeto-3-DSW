# Projeto 3 para disciplina de Desenvolvimento de Software para Web

## Instruções

- Clonar o repositorio
- Executar em um terminal, no diretório `./server` os comandos:
    1. `./grailsw run-app`
- Executar em outro terminal, no diretório `./client` os comandos:
    1. `npm install`
    2. `npm start`
- Entrar com as credenciais:
    - Email: `admin@email.com`
    - Senha: `admin`

## Descrição

Sistema para criação de promoções em sites de venda de ingressos

O sistema deve possuir um cadastro de sites de venda de ingressos, com os
seguintes dados: e-mail, senha, endereço/URL, nome e telefone.

O sistema deve possuir um cadastro de salas de teatro, com os seguintes dados:
e-mail, senha, CNPJ, nome e cidade.

O sistema deve possuir um cadastro de promoções, com os seguintes dados:
endereço/URL do site de venda de ingressos, CNPJ do teatro, nome da peça,
preço e dia/horário.

## Funcionalidades necessárias
- [X]  Operações CRUD de sites de venda de ingressos (requer login de
administrador)
- [X] Operações CRUD de teatros (requer login de administrador)
- [X] Listagem de todos os teatros em uma única página (não requer login)
- [X] Listagem de todos os teatros por cidade (não requer login)
- [ ] Criação de uma promoção de um teatro (requer login do teatro: via e-
mail + senha). Depois de fazer login, o teatro pode cadastrar uma
promoção. Para isso, deve escolher o site de venda de ingressos
(digitando seu endereço/URL ou escolhendo a partir de uma lista), o nome
da peça, o preço, e o dia/horário da sessão, e deve ser gravada a
promoção na base de dados.
- [ ] Listagem de todas as promoções de um teatro (não requer login).
- [ ] Listagem de todas as promoções de um site de venda de ingressos
(requer login do site: via e-mail + senha).
- [X] O sistema não deve permitir o cadastro de promoções de um mesmo
teatro ou de um mesmo site de venda de ingressos em um mesmo
dia/horário.
- [ ] O sistema deve ser internacionalizado em pelo menos dois idiomas:
português + outro de sua escolha.
