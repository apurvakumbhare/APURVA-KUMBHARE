import BounceCards from "./BounceCards";

const images = [
  "/certs/hackathon1.png",
  "/certs/hackathon2.png",
  "/certs/hackathon3.png",
  "/certs/hackathon4.png",
  "/certs/hackathon5.png"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

export default function HackathonCards() {
  return (
    <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
      <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Hackathons & Competitions
      </h2>
      <p style={{ opacity: 0.7, marginBottom: "4rem" }}>
        Real-world coding battles, innovation, and problem solving.
      </p>

      <BounceCards
        images={images}
        transformStyles={transformStyles}
        enableHover
        animationDelay={1.3}
        animationStagger={0.15}
        className="custom-bounceCards"
      />
    </div>
  );
}
