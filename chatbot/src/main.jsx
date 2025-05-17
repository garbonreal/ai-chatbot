import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from "recoil";
import Theme from "./assets/Theme";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <Theme>
        <App />
      </Theme>
    </RecoilRoot>
  </StrictMode>,
)
