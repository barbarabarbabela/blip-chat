# blip-chat

Um projeto para listar todos os contatos e mensagens de um bot específico.

## Objetivo

O objetivo deste projeto é permitir que os usuários visualizem todos os contatos e as mensagens associadas a um bot específico da Blip.

## Tecnologias Utilizadas

- **Nodejs**: Para a criação do backend da aplicação
- **React**: Biblioteca para construção de interfaces de usuário
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript
- **React Router**: Para gerenciamento de rotas

## Estrutura de Rotas

- **`/login`**: Rota de autenticação onde o usuário insere a API Key do bot.
- **`/`**: Rota principal que lista todos os contatos.
- **`/contatos`**: Rota que exibe as mensagens de um contato selecionado.

## Como Começar

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/blip-chat.git
cd blip-chat
```

### 2. Instale as dependencias

```bash
npm install
```

### 3. Execute o projeto

```bash
npm start
```

### 4. Acesse o projeto

Abra seu navegador e acesse http://localhost:3000 (ou a porta que o seu projeto estiver utilizando).

## Como Usar

1. Acesse a rota /login e insira a API Key do bot.
2. Após a autenticação, você será redirecionado para a página principal que lista todos os contatos.
3. Clique em um contato para visualizar as mensagens associadas a ele na rota /contatos.
