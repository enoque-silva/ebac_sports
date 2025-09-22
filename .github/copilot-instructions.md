# Copilot Instructions for ebac_sports

## Visão Geral
Este projeto é uma aplicação React criada com Create React App, utilizando TypeScript e Redux para gerenciamento de estado. O objetivo é simular uma loja esportiva, com funcionalidades de favoritos e carrinho.

## Estrutura Principal
- **src/components/**: Componentes reutilizáveis, como `Header` e `Produto`.
- **src/containers/**: Containers que conectam componentes à lógica de estado, como `ProdutosComponent`.
- **src/store/**: Configuração do Redux, incluindo slices para `carrinho` e `favoritos`.
- **public/**: Arquivos estáticos e HTML base.

## Padrões e Convenções
- **Redux Toolkit**: Slices em `src/store/slices/` definem o estado e reducers. Use `useSelector` e `useDispatch` para acessar e modificar o estado global.
- **Componentização**: Componentes recebem props tipadas via TypeScript. Containers conectam componentes ao estado global.
- **Estilos**: Utiliza styled-components, com arquivos de estilos ao lado dos componentes (`styles.ts`).
- **Favoritos/Carrinho**: Para verificar se um produto está nos favoritos/carrinho, compare o `id` do produto com os arrays do estado Redux.

## Fluxo de Dados
- O estado global é definido em `src/store/` e acessado nos containers via hooks do React-Redux.
- Exemplo: Em `ProdutosComponent`, o array de favoritos é obtido do Redux e usado para renderizar o estado de cada produto.

## Comandos Essenciais
- `npm start`: Inicia o servidor de desenvolvimento.
- `npm test`: Executa os testes (se existirem).
- `npm run build`: Gera o build de produção.

## Integrações e Dependências
- **React** e **Redux Toolkit** são as principais dependências.
- **styled-components** para estilização.
- Não há integração externa além das dependências do frontend.

## Exemplos de Padrão
```tsx
// src/containers/Produtos.tsx
const favoritos = useSelector((state: RootState) => state.favoritos.itens)
```

## Recomendações para Agentes
- Sempre utilize os slices do Redux para manipular estado global.
- Siga o padrão de componentização e tipagem.
- Consulte os arquivos em `src/store/slices/` para entender as ações disponíveis.
- Mantenha os estilos em arquivos separados, próximos ao componente.

---
Seções incompletas ou dúvidas? Solicite feedback para expandir instruções específicas sobre fluxos, testes ou integração.
