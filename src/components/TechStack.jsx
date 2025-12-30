
import ChromaGrid from "../components/ChromaGrid";
import "./TechStack.css";
import {
  FaHtml5, FaCss3Alt, FaGit, FaDocker, FaJava, FaGithub
} from "react-icons/fa";

import {
  SiSpringboot, SiMysql, SiOracle, SiMariadb, SiPostman
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { MdCloudQueue } from "react-icons/md";

const languages = [
  { title: "Java", icon: <FaJava color="#E11D48" />, borderColor: "#E11D48", gradient: "linear-gradient(135deg,#e11d48,#000)" },
  { title: "HTML", icon: <FaHtml5 color="#E34F26" />, borderColor: "#E34F26", gradient: "linear-gradient(135deg,#e34f26,#000)" },
  { title: "CSS", icon: <FaCss3Alt color="#1572B6" />, borderColor: "#1572B6", gradient: "linear-gradient(135deg,#1572b6,#000)" }
];

const frameworks = [
  { title: "Spring Boot", icon: <SiSpringboot color="#22C55E" />, borderColor: "#22C55E", gradient: "linear-gradient(135deg,#22c55e,#000)" },
  { title: "Spring MVC", icon: <TbApi color="#38BDF8" />, borderColor: "#38BDF8", gradient: "linear-gradient(135deg,#38bdf8,#000)" },
  { title: "Spring REST", icon: <TbApi color="#0EA5E9" />, borderColor: "#0EA5E9", gradient: "linear-gradient(135deg,#0ea5e9,#000)" },
  { title: "Spring AI", icon: <MdCloudQueue color="#A855F7" />, borderColor: "#A855F7", gradient: "linear-gradient(135deg,#a855f7,#000)" },
  { title: "Microservices", icon: <MdCloudQueue color="#F59E0B" />, borderColor: "#F59E0B", gradient: "linear-gradient(135deg,#f59e0b,#000)" }
];

const databases = [
  { title: "Oracle", icon: <SiOracle color="#F87171" />, borderColor: "#F87171", gradient: "linear-gradient(135deg,#f87171,#000)" },
  { title: "MySQL", icon: <SiMysql color="#0EA5E9" />, borderColor: "#0EA5E9", gradient: "linear-gradient(135deg,#0ea5e9,#000)" },
  { title: "MariaDB", icon: <SiMariadb color="#EC4899" />, borderColor: "#EC4899", gradient: "linear-gradient(135deg,#ec4899,#000)" }
];

const tools = [
  { title: "Git", icon: <FaGit color="#F97316" />, borderColor: "#F97316", gradient: "linear-gradient(135deg,#f97316,#000)" },
  { title: "GitHub", icon: <FaGithub color="#E5E7EB" />, borderColor: "#E5E7EB", gradient: "linear-gradient(135deg,#e5e7eb,#000)" },
  { title: "Postman", icon: <SiPostman color="#FB923C" />, borderColor: "#FB923C", gradient: "linear-gradient(135deg,#fb923c,#000)" },
  { title: "Docker", icon: <FaDocker color="#0DB7ED" />, borderColor: "#0DB7ED", gradient: "linear-gradient(135deg,#0db7ed,#000)" }
];


export default function TechStack() {
  return (
    <section className="techstack-section">
      <h2 className="techstack-title">Tech Stack</h2>

      <div className="techstack-grid">

        <div className="tech-group">
          <h3>Programming Languages</h3>
          <ChromaGrid items={languages} radius={120} />
        </div>

        <div className="tech-group">
          <h3>Frameworks & Libraries</h3>
          <ChromaGrid items={frameworks} radius={120} />
        </div>

        <div className="tech-group">
          <h3>Databases</h3>
          <ChromaGrid items={databases} radius={120} />
        </div>

        <div className="tech-group">
          <h3>Tools & Platforms</h3>
          <ChromaGrid items={tools} radius={120} />
        </div>

      </div>
    </section>
  );
}
