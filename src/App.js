import Project from "./Project";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import whiteCat from "./images/white-cat.jpg";
import blackCat from "./images/black-cat.jpg";
import projectPic from "./images/coding.jpg";
import chatAppPic from "./images/chat-app.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="presentation">
          <div className="profile-pic-container">
            <img src={whiteCat} alt="" className="profile-pic" />
            <h1 className="my-name">Ryan Petnga</h1>
          </div>
          <div className="presentation-text">
            <h2>About me</h2>
            <p>
              Hi ! I'm Ryan, a self-taught web developer.
              <br />
              <br />
              Growing up, I always had an affinity for everything tech related.
              Jailbreaking my first iPod, installing custom ROMs on my android
              phones or modding my gaming consoles were some of the things that
              developed my problem solving skills.
              <br />
              <br />
              My other passions are competitive shooter games as they require
              excellent hand-eye coordination, communication and team-work they
              help me develop my competitiveness and strive on improvement.
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
        </div>
      </header>
      <main>
        <h2>My work</h2>
        <div className="projects-container">
          <Project
            name="Chat app"
            description="Real time chat app with authentication built with react and firebase."
            imgURL={chatAppPic}
            liveCodeURL="https://odin-chat-app.vercel.app/"
            repositoryURL="https://github.com/ColdBlood237/odin-chat-app"
          />
          <Project
            name="Library"
            description="Real time chat app with authentication built with react and firebase."
            imgURL={chatAppPic}
            liveCodeURL="https://odin-chat-app.vercel.app/"
            repositoryURL="https://github.com/ColdBlood237/odin-chat-app"
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
