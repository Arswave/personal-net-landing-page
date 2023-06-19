// import './App.css';

import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import SectionTwo from "./components/SecTionTwo/SectionTwo";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionSeven from "./components/SectionSeven/SectionSeven";
import SectionEight from "./components/SectionEight/SectionEight";
import Licence from "./components/Licence/Licence";



function App() {
  return (
    <div style={{ width: "100vw" }} >
      <Head />

      <div
        style={{ backgroundColor: "#ECF2F0" }}>
        <Container>
          <NavbarComponent />
          <SectionOne />
        </Container>
      </div>

      <div style={{ backgroundColor: "#F9F9F9" }}>
        <Container>
          <SectionTwo />
        </Container>
      </div>
      <div style={{ backgroundColor: "#FFF" }}>
        <Container>
          <SectionThree />
        </Container>
      </div>
      <div style={{ backgroundColor: "#FAF6EB" }}>
        <Container>
          <SectionFour />
        </Container>
      </div>
      <div style={{ backgroundColor: "##F9F9F9" }}>
        <Container>
          <SectionFive />
        </Container>
      </div>
      <div style={{
        backgroundImage: "url('https://personel.net/wp-content/uploads/2022/12/wave-bg-1.svg')",
        backgroundColor: "#F5F5DC"
      }}>
        <Container>
          <SectionSix />
        </Container>
      </div>
      <div style={{
        backgroundColor: "#FAF6EB",
        backgroundImage: "url('https://personel.net/wp-content/uploads/2022/12/world-maps-3.png')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        padding: "1rem",
      }}>
        <Container>
          <SectionSeven />
        </Container>
      </div>
      
      <div style={{
        backgroundColor: "#F6F6F6",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        padding: "4rem",
      }}>
        <Container>
          <SectionEight />
        </Container>
      </div>

      <div style={{
        minWidth: "100vw",
        borderBottom: "solid 1px"
      }}>
        <Container>
          <Footer />
        </Container>
      </div>

      <div>
        <Container>
          <Licence />
        </Container>
      </div>
    </div>
  );
}

export default App;
