# Projeto TrybeTunes!

---

# Habilidades
Neste projeto, fui capaz de:

  * Fazer requisições e consumir dados vindos de uma `API`;

  * Utilizar os ciclos de vida de um componente React;

  * Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado
  
  * Utilizar o componente `BrowserRouter` corretamente;

  * Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;

  * Utilizar o `Switch` do `React Router`

  * Usar o componente `Redirect` pra redirecionar para uma rota específica;

  * Criar links de navegação na aplicação com o componente `Link`;


---

# O que foi pedido no projeto

Neste projeto foi solicitado a crição do TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.

### Protótipo do projeto
Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/BDQgAJvOe4KNUjmrYh5t68/TrybeTunes-Figma

# Instruções para clonar o projeto

1. Clone o repositório
  * `git clone git@github.com:romulo-rp29/trybetunes.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybetunes`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Verifique que os testes estão executando:
    * `npm test`

## ESLint e Stylelint

Para garantir a qualidade do código, foram utilizados neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

---

## Execução de testes unitários

Foi utilizado [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid`.

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library (RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação.

Para verificar a solução proposta, você pode executar todos os testes unitários localmente, basta executar:

```bash
npm test
```

## ©️ Aviso de direitos autorais

Esse projeto foi desenvolvido para propósitos de aprendizagem, todo o código e documentação são de [romulo-rp29](https://github.com/romulo-rp29) autoria e os direitos pertencem exclusivamente a [romulo-rp29](https://github.com/romulo-rp29). É permitido baixar ou clonar o repositório para fins de estudo. Contudo, não é permitido publicar cópias totais ou parciais. Este aviso não cobre bibliotecas e dependências, estas estão sujeitas a suas respectivas licenças.
