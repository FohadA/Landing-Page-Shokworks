import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Partners from './components/PartnersClients';
import Footer from './components/Footer';
// import CarouselList from './components/CarouselList';

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      {/* <CarouselList/> */}
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;
