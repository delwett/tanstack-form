import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './components/GlobalStyles'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
)
