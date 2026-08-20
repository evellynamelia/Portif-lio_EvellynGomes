# EG — Evellyn Gomes Portfolio

Portfólio pessoal de Evellyn Gomes, reunindo Design, Front-end, UI/UX, Marketing Digital e Audiovisual.

## Stack

- React
- TypeScript
- Vite
- Lucide React
- CSS Variables

## Estrutura enxuta

```text
src/
├── App.tsx          # páginas/seções e composição principal
├── components.tsx   # componentes reutilizáveis
├── data.ts          # navegação, serviços, projetos e processo
├── styles.css       # identidade visual e responsividade
└── main.tsx         # entrada da aplicação
```

## Temas

O **Dark Mode** é o tema padrão. O usuário pode alternar para Light Mode e a preferência fica salva no `localStorage`.

A interface usa CSS Variables, então as cores dos dois temas podem ser alteradas em um único lugar.

## Executar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
