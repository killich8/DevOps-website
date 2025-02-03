import { BrowserRouter } from "react-router-dom";
import {Analytics} from '@vercel/analytics/react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Blogs, StarsCanvas,Education } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Education />
        <Works />
        <Blogs />
      
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;