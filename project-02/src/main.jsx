import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import UserProfile from './UserProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <UserProfile avatar="https://gravatar.com/avatar/7eda383e2b04feeb5d3d7d627b8881c2?s=400&d=robohash&r=x"
    name="John Doe"
    email="john.doe@example.com"
    />
    <UserProfile avatar="https://robohash.org/7eda383e2b04feeb5d3d7d627b8881c2?set=set4&bgset=&size=400x400"
    name="Abdul Alim"
    email="abdul.alim@example.com"
    />
  </StrictMode>,
)
