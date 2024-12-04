import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-s1 text-p4">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;