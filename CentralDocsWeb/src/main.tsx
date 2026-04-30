import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
{/*import Login from './pages/Login/Login.tsx'*/}
// import Cadastro from './pages/Cadastro/Cadastro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Login/> */}
    {/* <Cadastro/> */}
  </StrictMode>,
)