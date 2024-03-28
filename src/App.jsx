
import styles from './App.module.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experiences/Experience'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'



function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
