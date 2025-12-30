import Silk from "./Silk";
import "./CertificatesBackground.css";

export default function CertificatesBackground() {
  return (
    <div className="certificates-bg">
      <Silk
        speed={8}
        scale={1}
        color="#4b1f5c52"
        noiseIntensity={1}
        rotation={0}
      />
    </div>
  );
}
