
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HeroClass from './components/HeroClass'
import CounterClass from './components/CounterClass'
import Timer from './components/Timer'





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
      {/* <Hero data={myData} /> */}
      <HeroClass data = {myData}/>
      {/* <CounterClass /> */}
      <Timer/>
      <Footer />
    </>
  )
}

export default App

