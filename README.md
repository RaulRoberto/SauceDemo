# Testes Automatizados para Saucedemo

Este repositório contém a implementação de testes automatizados para o site **SauceDemo**, utilizando o framework **Playwright** para testes de UI e **Page Object Model (POM)** para estruturação de código. Os testes abrangem diversos cenários de usuários e interações com o sistema, com foco em estabilidade, performance e visualização de falhas.

## Objetivo

O objetivo principal é validar a funcionalidade e a experiência do usuário no **SauceDemo**, simulando diversos tipos de interações e problemas que podem ocorrer em um cenário de produção.

### **Tecnologias utilizadas:**
- **Playwright**: Framework para testes automatizados de navegadores.
- **JavaScript**: Linguagem de programação utilizada.
- **Page Object Model (POM)**: Arquitetura de testes que facilita a manutenção e escalabilidade.

## Estrutura do Projeto

A estrutura do projeto segue o padrão do _Page Object Model_, onde temos diferentes classes representando as páginas e interações com elas. Além disso, os testes estão divididos por tipo de usuário, com cenários específicos para cada um.

### **Diretórios:**

- **`pages/`**: Contém as classes que representam as páginas do site (Login, Inventory, Produto, etc.). Essas classes encapsulam os elementos da página e os métodos de interação.
- **`tests/`**: Contém os testes organizados por tipo de usuário. Cada teste foca em um cenário específico.

## Configuração do Ambiente

### 1. **Instalar dependências**

Certifique-se de ter o **Node.js** instalado em sua máquina. Para instalar as dependências, execute:

```bash
npm install
```


### 2. Executar os testes
Para rodar todos os testes de uma vez:

```bash
npx playwright test
```

Para rodar um teste específico:

```bash
npx playwright test tests/login/standardUser.spec.js
```

### Estrutura de Testes

*Testes de Login:*
Os testes de login validam as interações com a página de login, utilizando diferentes tipos de usuário e suas permissões.

*standard_user.spec.js:* Testa o fluxo básico de login e valida o acesso a detalhes de produto e carrinho.

*lockedOutUser.spec.js:* Testa o login de um usuário bloqueado e valida a mensagem de erro.

*problemUser.spec.js:* Testa um usuário com problemas visuais (erro de imagem) e valida a exibição da página.

*performanceGlitchUser.spec.js:* Testa o login de um usuário com falhas de performance e valida o tempo de carregamento.

*errorUser.spec.js:* Testa o login de um usuário com comportamento inesperado e valida o funcionamento da interface.

*visualUser.spec.js:* Testa um usuário que apresenta falhas de layout e valida o tamanho do logo.

*invalidUser.spec.js:* Testa o login de um usuário com credenciais inválidas e valida a mensagem de erro.

### Cenários de Teste:

Usuarios padrão: Validação do fluxo normal de login e interações básicas de compra.

Usuarios com restrições: Testes de erro para usuários com problemas como bloqueio, falhas visuais e lentidão no carregamento.

Testes de erro visual: Validar aspectos de layout com o usuário visual para garantir a integridade da UI.

Erro de credenciais: Validar que mensagens de erro corretas são exibidas para usuários com dados inválidos.

### Como Contribuir

- Clone este repositório.

- Crie uma branch para a nova feature ou correção.

- Execute os testes localmente para garantir que tudo esteja funcionando.

- Submeta um pull request com a descrição clara das mudanças.

### Possíveis Melhorias Futuras

- Testes de Performance: Implementar mais cenários de performance com Playwright.

- Testes de Acessibilidade: Validar a conformidade com as diretrizes de acessibilidade.

- Testes de SEO: Verificar a exibição de elementos relevantes para o SEO.

### Licença

Este projeto está sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

### Notas Importantes:

O teste *problemUser.spec.js* simula um erro de imagem proposital. Pode ser adaptado para outros cenários de erro de conteúdo.

O teste *visualUser.spec.js* foca em problemas de layout, mas pode ser extendido para incluir comparações de screenshots.

### 📊 **Comentários sobre as Decisões**

1.. **Cobertura de Cenários**:
   - Testei **usuários bloqueados**, **com falhas visuais**, **com problemas de performance** e **com credenciais inválidas**, para cobrir uma variedade de casos que um sistema real poderia enfrentar.
   - **Testes de Layout** são essenciais para garantir que as mudanças no design não quebrem a interface.
