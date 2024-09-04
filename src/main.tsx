import '@mantine/core'
import { MantineProvider } from '@mantine/core'
import '@mantine/hooks'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
)
