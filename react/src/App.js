
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Testomonials from './components/Testomonials';
import Popular from './components/Popular';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Blog></Blog>
      <Testomonials></Testomonials>
      <Popular></Popular>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
