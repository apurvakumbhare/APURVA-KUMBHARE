import "./About.css";
import TrueFocus from "../components/TrueFocus";
import Particles from "../Particles";
import TechStack from "../components/TechStack";

function About() {
  return (
    <div className="about-page">
      {/* Background Particles */}
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="aboutInfo">
        <h1>About Me</h1>
        <p>I am a Full-Stack Developer specializing in Java and Spring-based architectures, with hands-on experience building scalable, secure, and production-ready applications. I enjoy solving real-world problems through clean backend design, efficient databases, and modern web interfaces. I’ve worked on startup-stage products and AI-powered platforms while consistently strengthening my problem-solving skills through competitive programming.</p>
        <h1>About Me</h1>
        <p>I am a Computer Science undergraduate specializing in Data Science at Ramdeobaba University, Nagpur, with a CGPA of 9.01. I actively work on full-stack and backend systems using Java, Spring Boot, and RESTful APIs.

          I’ve contributed to real startup products, built AI-powered systems, and led technical communities on campus. I strongly believe in writing scalable, maintainable code and creating systems that solve meaningful problems.</p>
      </div>

      <TechStack />
      <TrueFocus
        sentence="BACKEND DEVELOPER"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={0.6}
        pauseBetweenAnimations={1}
      />

    </div>
  );
}

export default About;



