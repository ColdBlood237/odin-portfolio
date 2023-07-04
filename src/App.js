import Project from "./Project";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import whiteCat from "./images/white-cat.jpg";
import blackCat from "./images/black-cat.jpg";
import projectPic from "./images/coding.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="profile-pic-container">
          <img src={whiteCat} alt="" className="profile-pic" />
          <h1 className="my-name">Ryan Petnga</h1>
        </div>
        <div className="presentation">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium arcu nec tortor efficitur eleifend. Cras dictum malesuada
            mi, at porta est lobortis non. Mauris sodales bibendum felis, id
            lacinia dolor laoreet ac. Sed sed nibh elit. In sit amet dui in
          </p>
          <div className="presentation-socials">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ColdBlood237"
            >
              <Github />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ryan-petnga"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </header>
      <main>
        <h2>My work</h2>
        <div className="projects-container">
          <Project
            name="Project name"
            description="Short description of the project. Just a couple sentences will do."
            imgURL={projectPic}
          />
          <Project
            name="Project name"
            description="Short description of the project. Just a couple sentences will do."
            imgURL={projectPic}
          />
          <Project
            name="Project name"
            description="Short description of the project. Just a couple sentences will do."
            imgURL={projectPic}
          />
          <Project
            name="Project name"
            description="Short description of the project. Just a couple sentences will do."
            imgURL={projectPic}
          />
          <Project
            name="Project name"
            description="Short description of the project. Just a couple sentences will do."
            imgURL={projectPic}
          />
          <Project
            name="Project name"
            description="Short description of the project. Just a couple sentences will do."
            imgURL={projectPic}
          />
        </div>
      </main>
      <footer>
        <div className="footer-text">
          <h2 className="contact-me">Contact me</h2>
          <p>
            Please get in touch if you think my work could be mutually
            beneficial!
          </p>
          <p className="address">Via Anna Frank, 17, 10072 Mappano TO, Italy</p>
          <div className="contacts">
            <p className="phone">
              <Phone /> +39 389 994 8706
            </p>
            <p className="mail">
              <Mail />{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:petngalan@gmail.com"
              >
                petngalan@gmail.com
              </a>
            </p>
          </div>
          <div className="socials">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ColdBlood237"
            >
              <Github />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ryan-petnga"
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <img src={whiteCat} alt="" className="footer-img" />
      </footer>
    </div>
  );
}

export default App;
