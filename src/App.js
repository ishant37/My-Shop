import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Background from './components/Background';
import Catagory from './components/Catagory';
import Container from './components/Container';
import Features from './components/Features';
import Fruits from './components/Fruits';
// import Features from './components/Features';
import Navbar from './components/Navbar';
import Fresheners from './components/Freshners';
import Cold from './components/Cold_drinks'
function App() {
  return (
    <>
      <Navbar />
      <Background />
      <About />
      <Container />
      <Fruits />
      <Catagory />
      <Fresheners />
      <Cold />
      <Features />
    </>
  );
}

export default App;
