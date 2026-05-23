import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import Team from './components/Team';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Menu />
      <Gallery />
      <Quote />
      <Team />
      <Reservations />
      <Footer />
    </div>
  );
}
