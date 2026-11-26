import { Github, Linkedin, Mail, Phone } from "lucide-react";

import Project from "./Project";

import chatAppPic from "./images/chat-app.png";
import whiteCatCoding from "./images/white-cat-coding.jpg";
import inventoryAppPic from "./images/inventory-app.png";
import membersOnlyPic from "./images/members-only.png";
import blogAPIPic from "./images/blog-api.png";
import openpilotPic from "./images/openpilot-b10.png";
import starpilotPic from "./images/starpilot-b10.png";
import ryanPic from "./images/ryan.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="presentation">
          <div className="profile-pic-container">
            <img src={ryanPic} alt="" className="profile-pic" />
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
              help me develop my competitiveness and strive for improvement.
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
            name="openpilot port: Leapmotor B10"
            description="Adds the Leapmotor B10 to openpilot, comma.ai's open-source driver-assistance system: reverse-engineered CAN FD network and DBC, angle-based lane-keeping in Python, and panda safety code in C (MISRA C, 100% line coverage). Built mostly with Claude (AI), directed and road-tested by me."
            imgURL={openpilotPic}
            repositoryURL="https://github.com/commaai/opendbc/pull/3936"
          />
          <Project
            name="StarPilot port: Leapmotor B10"
            description="The same port for StarPilot, an openpilot fork, plus speed control (alpha longitudinal) with safety limits, driven daily and tuned with Python drive-log analysis tools. Built mostly with Claude (AI), directed and road-tested by me."
            imgURL={starpilotPic}
            repositoryURL="https://github.com/StarPilotHQ/StarPilot/pull/309"
          />
          <Project
            name="Chat app"
            description="Real time chat app with authentication built with react and firebase."
            imgURL={chatAppPic}
            liveCodeURL="https://odin-chat-app.vercel.app/"
            repositoryURL="https://github.com/ColdBlood237/odin-chat-app"
          />
          <Project
            name="Inventory app"
            description="Public inventory app, made with MongoDB, Express, Node and Tailwind."
            imgURL={inventoryAppPic}
            liveCodeURL="https://gold-sore-chameleon.cyclic.app/inventory/"
            repositoryURL="https://github.com/ColdBlood237/odin-inventory"
          />
          <Project
            name="Members Only"
            description="Only members can see who sent the message and when, made with MongoDB, Express, Node, Passportjs and Tailwind."
            imgURL={membersOnlyPic}
            liveCodeURL="https://odin-members-only-bbyd.onrender.com/"
            repositoryURL="https://github.com/ColdBlood237/odin-members-only"
          />
          <Project
            name="Blog API"
            description="MERN stack blog app, with RESTful API in the backend."
            imgURL={blogAPIPic}
            liveCodeURL="https://odin-blog-api-client.vercel.app/"
            repositoryURL="https://github.com/ColdBlood237/odin-blog-api"
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
          <p className="address">10079 Mappano TO, Italy</p>
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
        <img src={whiteCatCoding} alt="" className="footer-img" />
      </footer>
    </div>
  );
}

export default App;
