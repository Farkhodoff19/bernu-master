import Services from './Components/Services/Services';
import Carousel from './Components/Carousel/Carousel';
import Active from "./Components/Active/Active";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Active/>
      <Hero/>
      <Carousel/>
      <Services/>
    </>
  )   
}

export default App