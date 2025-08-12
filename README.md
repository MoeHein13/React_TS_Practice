## Practice Project 1

A simple TypeScript-based React project for practicing `useReducer`, routing, modal with `createPortal`, and dynamic accordion content.

---

## Deployment

This app uses `BrowserRouter` with a specific `basename`:

```tsx
<BrowserRouter basename="/ReactPractice_Project_1/Practice-React-1/">
```

---

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

---

## Features

- 🧭 `useNavigate()` routing from homepage to project pages
- 🧠 Counter page using `useReducer` with multiple actions
- 🧩 Modal implementation using `ReactDOM.createPortal`
- 📚 Accordion component inside modal for displaying project details
- 🎨 Tailwind CSS styling for layout and buttons

---

## Pages & Components

- `/` → HomePage
  - Includes modal trigger + navigation button
- `/counter` → Counter
  - Implements increment, decrement, and add-custom-value form
- `Modal`
  - Portal modal with close-on-background-click
- `Accordion`
  - Expand/collapse sections rendered inside Modal
- `App.tsx`
  - Routes setup using `<Routes>` and `<Route>`

---

## Local Setup

```bash
npm install
npm run dev
```

---

## Folder Structure

```
/Practice-React-1
├── /public
├── /src
│   ├── /Components
│   │   ├── Accordion.tsx
│   │   ├── Counter.tsx
│   │   └── Modal.tsx
│   ├── /Pages
│   │   ├── AccorddionPage.tsx
│   │   └── HomePage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Notes

- Accordion content is defined in `AccorddionPage.tsx` and passed as props
- Modal background is dismissible by clicking outside the content box
- `useReducer` is used for cleaner counter state management
