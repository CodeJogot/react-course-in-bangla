
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'


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
      <Hero data={myData} />
      <Footer />
    </>
  )
}

export default App

