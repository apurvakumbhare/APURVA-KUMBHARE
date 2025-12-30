import { Routes, Route } from "react-router-dom";
import Particles from "./Particles";
import BubbleMenu from "./components/BubbleMenu";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import "./index.css";
function App() {
  return (
    <div className="app">
      {/* <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={50}
        moveParticlesOnHover={true}
      /> */}

      <BubbleMenu
        logo={<span style={{ fontWeight: 800 }}>APURVA</span>}
        menuBg="#ffffffff"
        menuContentColor="#000000ff"
        useFixedPosition={true}
      />
      <div className="clipper">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>

    </div>
  );
}


export default App;
