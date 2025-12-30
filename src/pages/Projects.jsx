import Folder from "../components/Folder";
import "./Projects.css";


export default function Projects() {
  return (
    <div className="projects-page">

      {/* PROJECT 1 */}
      <div className="project-row">
        <div className="project-left">
          <h2>SupportIQ</h2>
          <p>
            An AI-powered help desk system that automatically answers user queries using large language models. Built on a scalable microservices architecture, it uses Docker for containerization, MariaDB for secure data storage, and VectorDB for semantic search, ensuring accurate and fast query resolution.
          </p>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Spring AI</li>
            <li>REST APIs</li>
            <li>MariaDB</li>
            <li>Docker</li>
            <li>Ollama</li>
            <li>VectorDB</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          {/* <button>View Live</button> */}
        </div>

        <div className="project-right">
          <Folder size={2.5} color="#5227FF" />
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="project-row">
        <div className="project-left">
          <h2>The Vintage Library</h2>
          <p>
            A full-stack library management system designed to automate book issuing, returns, and inventory tracking. Implemented secure role-based access and fast search functionality, significantly improving accuracy and reducing manual workload through automation.
          </p>
          <ul>
            <li>Java</li>
            <li>Spring MVC</li>
            <li>Spring REST</li>
            <li>MySQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          {/* <button>View Live</button> */}
        </div>

        <div className="project-right">
          <Folder size={2.5} color="#00ffaa" />
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="project-row">
        <div className="project-left">
          <h2>Face to 3D Model</h2>
          <p>
            Converts a human photo into a 3D avatar using AI and renders it in
            real-time.
          </p>
          <ul>
            <li>Three.js</li>
            <li>AI Vision</li>
            <li>WebGL</li>
          </ul>
          {/* <button>View Demo</button> */}
        </div>

        <div className="project-right">
          <Folder size={2.5} color="#ff00ff" />
        </div>
      </div>

    </div>
  );
}
