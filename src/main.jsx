import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AmiiboSearch from './components/AmiiboSearch.jsx'
import './styles/AmiiboCard.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmiiboSearch />
  </StrictMode>
)
