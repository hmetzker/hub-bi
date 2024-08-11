# Hub BI - Central de Business Intelligence

## Descrição
Este projeto é uma central de Business Intelligence (BI) desenvolvida com React e hospedada no Firebase. Ele fornece uma interface para visualizar e acessar diferentes dashboards de BI.

## Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (geralmente vem com o Node.js)
- Conta no Firebase

## Configuração do Projeto

### 1. Clone o repositório

git clone https://github.com/seu-usuario/hub-bi.git
cd hub-bi

### 2. Instale as dependências

npm install

### 3. Configure o Firebase
- Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
- Ative o Firebase Hosting para o seu projeto
- Instale o Firebase CLI globalmente:
  ```
  npm install -g firebase-tools
  ```
- Faça login no Firebase:
  ```
  firebase login
  ```
- Inicialize o Firebase no seu projeto:
  ```
  firebase init
  ```
  Selecione "Hosting" quando perguntado sobre quais recursos deseja configurar

### 4. Desenvolvimento local
Para rodar o projeto localmente:

npm start

### 5. Build e Deploy
Para criar uma versão de produção e fazer o deploy:

npm run build
firebase deploy

## Estrutura do Projeto
- `src/`: Contém os arquivos fonte do React
- `public/`: Arquivos públicos, incluindo `index.html`
- `build/`: Diretório de build (gerado após `npm run build`)
- `.github/workflows/`: Configurações do GitHub Actions para CI/CD