import React from "react"

//COMPONENTS
import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Services } from "./components/Services/Services"
import { Portfolio } from "./components/Portfolio/Portfolio"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}