import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          headings: { fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
