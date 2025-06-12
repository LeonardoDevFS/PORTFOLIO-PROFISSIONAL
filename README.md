# Portfólio Pessoal de Leonardo Jonathan do Carmo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto foi criado para ser meu cartão de visitas digital, um lugar centralizado para mostrar minha trajetória, minhas competências e os projetos que desenvolvi.

**Veja a versão ao vivo:** (https://portfolioleonardojcarmo.netlify.app/) 

---

## ✨ Sobre o Projeto

Este portfólio foi desenhado com um layout moderno de duas colunas, com o objetivo de contar minha história profissional de forma clara e interativa. Na coluna da esquerda, minhas informações principais permanecem fixas, enquanto na direita, o visitante pode navegar pela minha trajetória e projetos.

O design foi inspirado em layouts contemporâneos e construído do zero, com foco total na experiência do usuário, interatividade e responsividade.

### Principais Features do Portfólio

* **Layout Moderno:** Design de duas colunas com conteúdo fixo e de rolagem para uma navegação intuitiva.
* **Timeline Interativa:** Uma linha do tempo com animações e tooltips que revelam mais informações sobre cada experiência ao passar o mouse.
* **Design Responsivo:** Totalmente adaptado para uma visualização perfeita em desktops, tablets e celulares.
* **Formulário de Contato Funcional:** Utiliza Netlify Functions como um backend serverless para o envio de e-mails, sem a necessidade de um servidor tradicional.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **Front-End:**
    * HTML5 Semântico
    * CSS3 (com Variáveis, Flexbox e Grid)
    * JavaScript (ES6+)
    * [Feather Icons](https://feathericons.com/) para a iconografia.

* **Back-End & Deploy:**
    * **Netlify Functions:** Para o backend do formulário de contato.
    * **Node.js:** Ambiente de execução para a função serverless.
    * **Nodemailer:** Biblioteca para o envio dos e-mails.
    * **Netlify:** Plataforma para deploy e hospedagem.
    * **Netlify CLI:** Para o ambiente de desenvolvimento local.

---

## 🏁 Rodando o Projeto Localmente

Para rodar este projeto no seu computador, siga os passos abaixo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) (que já inclui o npm).
* Conta no [Netlify](https://www.netlify.com/).

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LeonardoDevFS/seu-repositorio.git](https://github.com/LeonardoDevFS/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale o Netlify CLI:**
    ```bash
    npm install netlify-cli -g
    ```

3.  **Faça o login na sua conta Netlify:**
    ```bash
    netlify login
    ```

4.  **Crie o arquivo de variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione suas credenciais de e-mail (usadas pela função do formulário). Use o `.env.example` como modelo:
    ```
    EMAIL_USER=seu-email@gmail.com
    EMAIL_PASS=sua-senha-de-app-do-gmail
    EMAIL_TO=email-para-onde-as-mensagens-serao-enviadas
    ```
    *Lembre-se: `EMAIL_PASS` deve ser uma [senha de aplicativo](https://support.google.com/accounts/answer/185833) gerada no Google, e não a sua senha normal.*

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    netlify dev
    ```
    O site estará disponível em `http://localhost:8888`.

---


## 📫 Contato

**Leonardo Jonathan do Carmo**

* **Email:** (leonardocarmo941@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/leonardo2002/](https://www.linkedin.com/in/leonardo2002/)

---

## 📚 READMEs dos Projetos Individuais

Abaixo está o espaço dedicado para os detalhes de cada projeto listado no portfólio.

---

<div align="center">
  <h1>
     Sistema de Gestão 🏪
  </h1>

  <p>
    Um sistema de gestão de desktop completo para adegas e distribuidoras, construído com Electron, Node.js e ❤️ em Itajubá-MG.
  </p>
  
  <p>
    <a href="https://github.com/LeonardoDevFS/Gerenciamento-De-Distribuidoras">
      <img src="https://img.shields.io/github/issues/seu-usuario/seu-repositorio?style=for-the-badge" alt="Issues">
    </a>
    <a href="https://github.com/LeonardoDevFS/Gerenciamento-De-Distribuidoras">
      <img src="https://img.shields.io/github/stars/seu-usuario/seu-repositorio?style=for-the-badge" alt="Stars">
    </a>
    <a href=""https://github.com/LeonardoDevFS/Gerenciamento-De-Distribuidoras">
      <img src="https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge" alt="Licença MIT">
    </a>
    <a href=""https://github.com/LeonardoDevFS/Gerenciamento-De-Distribuidoras">
      <img src="https://img.shields.io/badge/vers%C3%A3o-1.0.0-informational?style=for-the-badge" alt="Versão 1.0.0">
    </a>
  </p>
</div>


---


### 🎯 **Sobre o Projeto**

O "Gerenciamento de Distruibuidoras  - Gestão" é um sistema de Ponto de Venda (PDV) local, rápido e que não depende de internet, ideal para o comércio do dia a dia. Ele centraliza as operações mais importantes de um pequeno negócio, desde o registro de uma venda até a análise de dados no dashboard, tudo com uma interface limpa e intuitiva.

---

### ✨ **Principais Funcionalidades**

- 📊 **Dashboard Analítico:** Gráficos de faturamento diário e dos produtos mais vendidos.
- 🛒 **Ponto de Venda (PDV):** Interface rápida para registrar vendas com carrinho de compras.
- 📦 **Gestão de Estoque:** Controle total sobre os produtos e relatórios de estoque baixo.
- 👥 **Gestão de Clientes:** Cadastro completo de clientes para um relacionamento mais próximo.
- 💰 **Controle de Fiado:** Sistema integrado para gerenciar vendas pendentes e registrar pagamentos.
- 📜 **Histórico de Vendas:** Registro detalhado de todas as vendas para consulta.
- 🧾 **Recibos Profissionais:** Geração de recibos detalhados e prontos para impressão.

---

### 🚀 **Tecnologias Utilizadas**

O projeto foi construído utilizando um conjunto de tecnologias modernas e robustas:

| Categoria         | Tecnologia                               |
|-------------------|------------------------------------------|
| 🖥️ **Desktop App** | `Electron`                               |
| ⚙️ **Backend** | `Node.js`                                |
| 🎨 **Frontend** | `HTML5`, `CSS3`, `JavaScript (ES6+)`     |
| 🗃️ **Banco de Dados**| `SQLite3`                                |
| 📈 **Gráficos** | `Chart.js`                               |

---

### ⚙️ **Configuração do Ambiente Local**

Para rodar este projeto na sua máquina, siga os passos abaixo.

#### **Pré-requisitos**
- Você precisa ter o **[Node.js](https://nodejs.org/en/)** (versão 16 ou superior) instalado.
- O **npm** (gerenciador de pacotes) já vem instalado junto com o Node.js.

<details>
  <summary><b>▶️ Clique aqui para ver os passos da instalação</b></summary>
  
  <br>
  
  1.  **Clone o repositório:**
      ```bash
      git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
      ```

  2.  **Acesse a pasta do projeto:**
      ```bash
      cd Gerenciamento-De-Distribuidoras
      ```

  3.  **Instale as dependências:**
      ```bash
      npm install
      ```

  4.  **Execute a aplicação:**
      ```bash
      npm start
      ```
  A aplicação deverá iniciar em modo de desenvolvimento.
</details>

---

### 🔮 **Próximos Passos e Melhorias Futuras**

Este projeto está em constante evolução! Os próximos passos incluem:

- [ ] **Cálculo de Lucro:** Adicionar `preço de custo` para relatórios de lucratividade.
- [ ] **Relatórios Avançados:** Módulo dedicado com filtros por data e exportação para CSV/Excel.
- [ ] **Backup e Restauração:** Funcionalidade crítica para a segurança dos dados.
- [ ] **Suporte a Código de Barras:** Agilizar vendas com um leitor de códigos.
- [ ] **Tela de Configurações:** Permitir que o usuário personalize os dados da loja.

---

### 📄 **Licença**

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  <p>Feito com muito ☕ e <code>código</code> por <b>Leonardo Jonathan do Carmo</b></p>
  <p>
    <a href="https://github.com/LeonardoDevFS">GitHub</a> &nbsp;|&nbsp;
    <a href="https://www.linkedin.com/in/leonardo2002/">LinkedIn</a>
  </p>
</div>


Markdown

# 🔬 Syrius Medical Group - Sistema de Gerenciamento de Recoletas Laboratoriais (Unidade Itajubá) 🏥

[![Licença: ISC](https://img.shields.io/badge/Licença-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Bem-vindo ao sistema que vai revolucionar o gerenciamento de recoletas na unidade de Itajubá! Este projeto foi cuidadosamente desenvolvido para simplificar e otimizar cada etapa do processo, desde a solicitação inicial até o acompanhamento e registro final das recoletas de amostras laboratoriais. 💉🩸

---

## 📜 Sumário

* [🎯 Sobre o Projeto](#-sobre-o-projeto)
* [✨ Funcionalidades Implementadas](#-funcionalidades-implementadas)
* [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [🖼️ Capturas de Tela (Preview)](#️-capturas-de-tela-preview)
* [⚙️ Configuração do Ambiente Local](#️-configuração-do-ambiente-local)
    * [Pré-requisitos](#pré-requisitos)
    * [Backend (API Node.js)](#backend-api-nodejs)
    * [Frontend (Aplicação Web)](#frontend-aplicação-web)
* [🚀 Deploy (Exemplo com Render.com)](#-deploy-exemplo-com-rendercom)
* [📂 Estrutura do Projeto](#-estrutura-do-projeto)
* [💡 Possíveis Melhorias Futuras](#-possíveis-melhorias-futuras)
* [🧑‍💻 Autor](#-autor)
* [📄 Licença](#-licença)

---

## 🎯 Sobre o Projeto

O Sistema de Gerenciamento de Recoletas Laboratoriais visa proporcionar uma ferramenta eficiente e intuitiva para a equipe da Syrius Medical Group (Unidade Itajubá). Com ele, o fluxo de trabalho relacionado às recoletas torna-se mais ágil, organizado e menos propenso a erros, garantindo um melhor atendimento e rastreabilidade dos processos.

---

## ✨ Funcionalidades Implementadas

* ✅ **Autenticação Segura:** Login e logout de usuários utilizando Firebase Authentication (Email/Senha).
* dashboards **Painel de Controle (Dashboard) Dinâmico:**
    * 📊 Visualização rápida de estatísticas chave: Recoletas Pendentes, Concluídas Hoje e Total de Canceladas.
    * ➕ Acesso rápido para "Registrar Nova Recoleta".
    * 🔍 Busca Rápida por Número de Registro do paciente diretamente do painel.
* 📝 **Registro Detalhado de Novas Recoletas:**
    * Formulário completo para informações do paciente (Nome, Nº Registro, Telefone).
    * Campos para Exame Laboratorial, Motivo da Recoleta (com opção "Outro") e Observações.
* 📋 **Consulta e Gerenciamento Avançado de Recoletas:**
    * Listagem organizada de todas as solicitações.
    * 🔍 Filtros por Status da recoleta (Pendente, Concluída, Cancelada).
    * 🆔 Busca por Número de Registro exato na lista de consulta.
    * 👁️ Visualização dos detalhes completos de cada solicitação em um modal interativo.
    * ✏️ Edição flexível do Status, Data da Efetivação da Recoleta e Observações.
* 📜 **Log de Atividades (Backend):**
    * Auditoria das ações de criação e atualização de recoletas.
    * Logs armazenados de forma segura no Firestore (visíveis para administradores no Console do Firebase).
* 📱 **Design Responsivo:** Interface adaptada para uma ótima experiência em desktops, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

Este projeto combina tecnologias modernas para entregar uma solução robusta e eficiente:

* 🖥️ **Frontend:**
    * HTML5 (Estrutura semântica)
    * CSS3 (Estilização avançada com Variáveis CSS, Flexbox e Grid Layout)
    * JavaScript (ES6 Modules para interatividade e lógica do cliente)
    * Font Awesome (Biblioteca de ícones)
* ⚙️ **Backend:**
    * Node.js (Ambiente de execução JavaScript no servidor)
    * Express.js (Framework para construção da API RESTful)
* 🔑 **Autenticação:**
    * Firebase Authentication (Gerenciamento de usuários por Email/Senha, SDK cliente)
* 💾 **Banco de Dados:**
    * Google Cloud Firestore (Banco de dados NoSQL flexível e escalável, acessado via Firebase Admin SDK no backend)
* ☁️ **Hospedagem (Exemplo de Configuração):**
    * **Frontend:** Render Static Site
    * **Backend:** Render Web Service
* 🔧 **Ferramentas de Desenvolvimento:**
    * Git & GitHub (Controle de versão e colaboração)
    * npm (Gerenciador de pacotes Node.js)
    * VS Code (Ambiente de desenvolvimento integrado)

---

## ⚙️ Configuração do Ambiente Local

Siga estes passos para executar o projeto em sua máquina local para desenvolvimento ou testes.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada, já inclui o npm).
* Acesso ao seu projeto no [Console do Firebase](https://console.firebase.google.com/).

### Backend (API Node.js)

1.  **⬇️ Clone o Repositório:**
    ```bash
    git clone [https://github.com/LeonardoDevFS/Recoleta_System.git](https://github.com/LeonardoDevFS/Recoleta_System.git)
    cd Recoleta_System # Ou para a pasta específica do backend
    ```

2.  **📦 Instale as Dependências:**
    Navegue até o diretório do seu backend (onde está o `package.json`) e execute:
    ```bash
    npm install
    ```

3.  **🔑 Configure as Variáveis de Ambiente:**
    * **Chave da Conta de Serviço Firebase:**
        1.  No Console do Firebase: `Configurações do Projeto` > `Contas de Serviço`.
        2.  Clique em `Gerar nova chave privada` e confirme. O download de um arquivo JSON iniciará.
        3.  Renomeie este arquivo para `serviceAccountKey.json`.
        4.  Coloque-o na pasta `config/` dentro do seu diretório backend.
        5.  **🚨 IMPORTANTE:** Adicione `backend/config/serviceAccountKey.json` (ou o caminho correto) ao seu arquivo `.gitignore` para **NUNCA** enviar esta chave para o repositório Git!
    * **Arquivo `.env`:**
        Crie um arquivo chamado `.env` na raiz da pasta do seu backend com o seguinte conteúdo:
        ```env
        GOOGLE_APPLICATION_CREDENTIALS="./config/serviceAccountKey.json" # Caminho para sua chave
        PORT=3000
        ```

4.  **▶️ Inicie o Servidor Backend:**
    ```bash
    npm start
    ```
    Para desenvolvimento com reinício automático ao salvar arquivos (requer `nodemon`):
    ```bash
    npm run dev
    ```
    O servidor backend deverá estar acessível em `http://localhost:3000`. Verifique o endpoint de saúde: `http://localhost:3000/health`.

### Frontend (Aplicação Web)

1.  **📂 Navegue até a Pasta do Frontend:**
    (Onde estão `index.html`, `style.css`, `script.js`).

2.  **🔗 Configure a URL da API:**
    * Abra o arquivo `script.js`.
    * Verifique se a constante `API_BASE_URL` aponta para seu backend local:
        ```javascript
        const API_BASE_URL = 'http://localhost:3000/api';
        ```

3.  **🌐 Abra no Navegador:**
    * Abra o arquivo `index.html` diretamente no seu navegador.
    * **Recomendado:** Para uma melhor experiência e para evitar potenciais problemas de CORS, sirva os arquivos através de um servidor HTTP local.
        * Com Node.js, usando `http-server`:
            ```bash
            # Se não tiver, instale globalmente (uma vez):
            # npm install -g http-server
            # Na pasta do frontend, execute:
            http-server -p 8080 -o # -o abre no navegador automaticamente
            ```
            Acesse `http://localhost:8080`.
        * Ou utilize a extensão "Live Server" no VS Code.

---

## 🚀 Deploy (Exemplo com Render.com)

A aplicação foi configurada para ser facilmente implantada na plataforma Render.com:

1.  **Backend (API Node.js):**
    * Implantado como um **"Web Service"**.
    * **Variáveis de Ambiente no Render:** Configure `GOOGLE_APPLICATION_CREDENTIALS` usando a funcionalidade "Secret Files" do Render para o conteúdo do seu `serviceAccountKey.json`. O `PORT` é fornecido pelo Render.
    * **Build Command:** `npm install`
    * **Start Command:** `npm start`
2.  **Frontend (Site Estático):**
    * Implantado como um **"Static Site"**.
    * **Root Directory:** Aponte para a pasta que contém os arquivos do frontend.
    * **Build Command:** (geralmente vazio para este tipo de projeto estático).
    * **Publish Directory:** (geralmente `.` ou o mesmo que o Root Directory).
    * **Importante:** O `script.js` no frontend implantado deve ter a `API_BASE_URL` atualizada para a URL pública do backend no Render.

---

## 📂 Estrutura do Projeto (Sugestão)

Recoleta_System/
*├── 📁 backend/                # Código do servidor Node.js/Express

*│   ├── 📁 config/

*│   │   ├── 📄 firebaseAdminSetup.js

*│   │   └── 🔑 serviceAccountKey.json  <-- (IMPORTANTE: Adicionar ao .gitignore!)

*│   ├── 📁 routes/

*│   │   └── 📄 recoletasRoutes.js

*│   ├── 📁 services/

*│   │   ├── 📄 recoletasService.js

*│   │   └── 📄 logService.js

*│   ├── 📄 .env                  <-- (IMPORTANTE: Adicionar ao .gitignore!)

*│   ├── 📄 server.js

*│   └── 📄 package.json

*├── 📁 frontend/               # Código do cliente (ou arquivos na raiz do projeto)

*│   ├── 📄 index.html

*│   ├── 📄 style.css

*│   └── 📄 script.js

*├── 📄 .gitignore

*└── 📄 README.md

*(Ajuste conforme sua estrutura real se o frontend estiver na raiz)*

---

## 💡 Possíveis Melhorias Futuras

O céu é o limite, mas aqui estão algumas ideias para evoluir o sistema:

* 🚀 **Busca por Nome Avançada:** Implementar busca por nome do paciente "começa com" (case-insensitive) ou até mesmo full-text com ferramentas externas (Algolia, Typesense).
* 🛡️ **Segurança da API Reforçada:** Implementar verificação de Token de ID do Firebase em todas as rotas do backend.
* 🚦 **Validação de Dados Completa:** Adicionar validações mais granulares no frontend e, crucialmente, no backend (usando bibliotecas como `joi` ou `express-validator`).
* ✨ **UX Aprimorada:**
    * Substituir `alert()` por notificações "toast" não bloqueantes.
    * Adicionar indicadores de carregamento (spinners) mais específicos para ações assíncronas.
    * Implementar paginação na lista de recoletas.
* 📅 **Filtro por Intervalo de Datas:** Permitir que os usuários filtrem recoletas por um período específico.
* 📊 **Relatórios:** Uma seção para visualização de dados consolidados e relatórios.
* 👤 **Gerenciamento de Usuários:** Para administradores poderem gerenciar contas de acesso.
* 📜 **Interface para Log de Atividades:** Exibir os logs de atividades dentro da aplicação para administradores.

---

## 🧑‍💻 Autor

* **LeonardoDevFS**
    * GitHub: [https://github.com/LeonardoDevFS](https://github.com/LeonardoDevFS)

---

## 📄 Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo `LICENSE`.




<h1 align="center">🤖 Chatbot WhatsApp Syrius/Santa Casa 🏥</h1>

<p align="center">
  <em>Atendimento inteligente e integrado para pacientes, com um painel de controle completo para atendentes.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-16+-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/WhatsApp--Web.js-Integrado-brightgreen" alt="WhatsApp-Web.js">
  <img src="https://img.shields.io/badge/Express.js-API-blue" alt="Express.js">
  <img src="https://img.shields.io/badge/Socket.IO-Realtime-yellow" alt="Socket.IO">
  <img src="https://img.shields.io/badge/Firebase-Firestore-orange" alt="Firebase Firestore">
</p>

---

> Este projeto oferece uma solução de chatbot para WhatsApp, desenvolvida para o **Syrius Medical Group** em parceria com a **Santa Casa da Misericórdia de Itajubá**. Ele automatiza o atendimento inicial, gerencia agendamentos, fornece informações e conecta pacientes a atendentes humanos através de um dashboard web intuitivo.

## ✨ Funcionalidades Principais

### 💬 Para o Paciente (via WhatsApp)
* **🤖 Assistente Virtual Inteligente:** Respostas automáticas para dúvidas comuns, 24/7.
* **📅 Agendamento de Exames Simplificado:** Fluxo guiado para solicitar agendamentos e orçamentos.
* **ℹ️ Informações Rápidas:** Acesso fácil a detalhes sobre consultas, exames e preparos.
* **📄 Verificação de Agendamentos:** Consulta rápida de exames já marcados.
* **🚶 Fila de Atendimento Humano:** Direcionamento organizado para falar com um atendente.
* ** encuesta_satisfacao: Pesquisa de Satisfação:** Feedback do paciente ao final do atendimento.

### 🖥️ Para o Atendente (via Dashboard Web)
* **👁️ Visão Geral em Tempo Real:** Monitoramento de todos os chats ativos, categorizados e com status.
* **🗣️ Intervenção Direta:** Capacidade de assumir conversas, enviar mensagens e interagir diretamente com os pacientes.
* **🗓️ Gestão de Agendamentos:** Visualização, criação e exclusão de agendamentos de exames.
* **👨‍⚕️ Gestão de Doutores:** Cadastro e listagem de médicos (essencial para agendamentos de ultrassonografia).
* **🔒 Acesso Seguro (Login):** Página de login para o painel de controle.
* **📊 Status do Sistema:** Indicadores de conexão do bot e da comunicação em tempo real.

## 🛠️ Tecnologias Utilizadas

* **Backend:** Node.js, `whatsapp-web.js`, Express.js, Socket.IO, Firebase Admin SDK.
* **Frontend:** HTML, CSS, JavaScript (Vanilla).
* **Banco de Dados:** Firebase Firestore.
* **Outras Ferramentas:** `qrcode-terminal`, `cpf-cnpj-validator`.

## 🚀 Início Rápido

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure o Firebase:**
    * Crie um projeto no [Firebase Console](https://console.firebase.google.com/) e ative o **Firestore**.
    * Baixe sua chave de conta de serviço (`serviceAccountKey.json`) em "Configurações do projeto" > "Contas de serviço".
    * Coloque o `serviceAccountKey.json` na raiz do projeto.
    * Ajuste o `projectId` em `config.js` para corresponder ao seu projeto Firebase.
4.  **Verifique `config.js`:**
    * Ajuste `PORT` se necessário (padrão: 3000).
    * Para desenvolvimento, `puppeteer.headless` pode ser `false`. Para produção, use `true`.

## ▶️ Executando o Bot

1.  **Inicie o servidor:**
    ```bash
    node server.js
    ```
2.  **Escaneie o QR Code:** Use o WhatsApp no seu celular para escanear o código que aparecerá no terminal.
3.  **Acesse o Dashboard:**
    * Após a conexão, acesse `http://localhost:3000` no seu navegador.
    * **Login (Desenvolvimento):** Usuário: `Leonardocarmo`, Senha: `E5R4A7Vo123@` (definidos em `login.js`).
    * O dashboard principal estará em `http://localhost:3000/dashboard.html`.

## ⚠️ Notas de Segurança Cruciais

* **`serviceAccountKey.json`:** Este arquivo é SECRETO! **NÃO o envie para o Git.** Adicione-o ao `.gitignore`.
* **Login do Dashboard:** As credenciais em `login.js` são **para desenvolvimento apenas e inseguras**. Implemente autenticação de backend para produção!
* **CORS e Headless:** Ajuste as configurações de CORS (`config.js` e `server.js`) e `puppeteer.headless` (`config.js`) para produção.

## 🔮 Próximos Passos (Sugestões)

* 🔐 Implementar autenticação segura no backend para o dashboard.
* 🔄 Adicionar funcionalidade de edição completa para agendamentos (rota `PUT`).
* 💾 Considerar persistência de sessão do bot (ex: Redis) para maior resiliência.
* 🧪 Adicionar testes unitários e de integração.

---

<p align="center">
  Feito com ❤️ para otimizar o atendimento ao paciente.
</p>

