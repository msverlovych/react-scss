import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './context/ThemeProvider.tsx';
import App from './App.tsx';
import './sass/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
