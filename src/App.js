import './App.css';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Portolio />
      <Testimonials />
    </main>
    </>
  )
}

export default App;
