import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 selection:bg-primary-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Projects />
        <Experience />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
