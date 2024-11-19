import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './context/ThemeProvider.tsx';
import './sass/styles.scss';
import App from './App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
