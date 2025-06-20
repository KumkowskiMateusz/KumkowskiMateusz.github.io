import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './components/App/App.scss'
import ProjectPage from './components/ProjectPage/ProjectPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
