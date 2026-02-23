import { Header } from "@/components/Layout/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" style={{ height: "100vh" }}>
          <Hero/>
        </section>

        <section id="sobre" >
          <About/>
        </section>
        
        <section id="projetos" >
          <Projects />
        </section>

        <section id="experiencia">
          <Experience />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </>
  )
}
