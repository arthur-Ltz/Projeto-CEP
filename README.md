# BuscaCEP

Buscador de endereço a partir do CEP, feito com HTML, CSS e JavaScript puro.

Projeto pessoal de portfólio, criado para praticar manipulação do DOM e consumo de API.

## Como funciona

1. Digite um CEP com 8 números (o campo aceita só dígitos)
2. Clique em buscar
3. O app consulta a [ViaCEP](https://viacep.com.br) e mostra rua, bairro e cidade
4. Cada busca vira uma tag no rodapé. Clicando nela, o CEP volta para o campo e você pode buscar de novo

Se o CEP não existir, o card mostra "CEP Inválido" e a tag fica marcada como erro.

## Tecnologias

- HTML
- CSS (com nesting nativo)
- JavaScript (fetch, async/await e event delegation)
- API ViaCEP

## Como rodar

Não precisa instalar nada. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone <url-do-repositorio>
```

Se preferir, use a extensão Live Server do VS Code.

## Ideias por trás do funcionamento

- Buscar dados de uma API com `fetch` e tratar a resposta com `.json()`
- Validar a entrada no JavaScript, sem depender só do `minlength` do HTML
- Criar e remover elementos do DOM dinamicamente
- Usar event delegation para elementos que são criados depois do carregamento da página

## Autor

Feito por [Arthur](https://github.com/arthur-Ltz), estudante de Engenharia de Software.
