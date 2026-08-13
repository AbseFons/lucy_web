import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { MusicPlayerProvider } from './context/MusicPlayerContext'
import 'leaflet/dist/leaflet.css'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MusicPlayerProvider>
      <App />
    </MusicPlayerProvider>
  </StrictMode>,
)
