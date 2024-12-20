
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HeroClass from './components/HeroClass'
import ButtonCounter from './components/HOC/ButtonCounter'
import HoverCounter from './components/HOC/HoverCounter'
import EnhancedButtonComponent from './components/HOC/EnhancedButtonComponent'
import EnhancedHoverComponent from './components/HOC/EnhancedHoverComponent'





function App() {

  const myData = {
    title: "Welcome to my website",
    title2: "Oops! You are not logged in",
    ds: "This is a sample website for demonstration purposes.",
    isLogin: false
  }

  return (
    <>
      <Navbar />
      <EnhancedButtonComponent/>
      <EnhancedHoverComponent/>
    </>
  )
}

export default App

