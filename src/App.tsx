import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import React from "react"
import { useState, useEffect } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [popUp, setPopUp] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("data-color-scheme", darkMode ? "dark" : "light")
  }, [darkMode])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const searchParams = new URLSearchParams(formData as any).toString()

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(searchParams).toString(),
    })
      .then(() => console.log("Form successfully submitted", formData))
      .catch((error) => alert(error))

    setPopUp(true)
  }

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero popUp={popUp} setPopUp={setPopUp} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact onSubmit={handleSubmit} />
      <Footer />
    </div>
  )
}

export default App
