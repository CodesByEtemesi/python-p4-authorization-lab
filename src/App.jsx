import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners.jsx';
import About from './components/About/About.jsx';
import Stores from './components/Stores/Stores.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Stores />
      <Blogs />
      <About />
      <Partners />
      <Footer />
    </div>
  )
}

export default App