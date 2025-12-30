import "../pages/Certificates.css";
import CertificatesBackground from "../components/CertificatesBackground";

import MagicBento from "../components/MagicBento";
import HackathonCards from "../components/HackathonCards";
import MagicBento2 from "../components/MagicBentocopy";
import MagicBento0 from "../components/MagicBentocopycopy";

function Certificates() {
  return (
    <div className="certificates-page">
      <CertificatesBackground />
      <div className="cirtif">
        <h1>INTERNSHIP CIRTIFICATIONS</h1>

        <MagicBento0
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />

      </div>
      <div className="cirtif">


        {/* ===== Major Certificates ===== */}
        <h1>MAJOR CIRTIFICATES</h1>

        <MagicBento
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
      <div className="cirtif">
        <h1>HACKATHONS</h1>
        <MagicBento2
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>




      {/* Hackathon Section
      <HackathonCards /> */}




    </div>
  );
}

export default Certificates;



