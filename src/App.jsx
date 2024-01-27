import About from './sections/About'
import Hero from './sections/Hero'
import { Nav } from './sections/Nav'
import GetStarted from './sections/GetStarted';
import './index.css'
import Explore from './sections/Explore';
import WhatsNew from './sections/WhatsNew';
import World from './sections/World';
import Insights from './sections/Insights';
import Footer from './sections/Footer';

function App() {
  

  return (
    <div className="bg-[#1A232E] h-full overflow-hidden">
      <Nav />
      <Hero />
      <div className='relative'>
        <About />
        <div className='absolute w-[50%] inset-0 gradient-02' />
        <Explore />
      </div>
      <div className="relative">
      <GetStarted />
        <div className='absolute w-[50%] inset-0 gradient-03' />
      <WhatsNew />
      </div>
      <div className="relative">
      <World />
        <div className='absolute w-[50%] inset-0 gradient-04' />
      <Insights />
      </div>
      <Footer />
    </div>
  );
}

export default App
