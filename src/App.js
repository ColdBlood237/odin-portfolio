import Project from "./Project";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/white-cat.jpg" alt="" />
        <h1>Ryan Petnga</h1>
        <div className="presentation">
          <h2 className="text-3xl font-bold underline">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium arcu nec tortor efficitur eleifend. Cras dictum malesuada
            mi, at porta est lobortis non. Mauris sodales bibendum felis, id
            lacinia dolor laoreet ac. Sed sed nibh elit. In sit amet dui in
            dolor fringilla posuere. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Duis vitae lacus id
            metus ullamcorper tristique. Nullam vitae purus semper, dignissim
            est eu, tempor tellus. Morbi malesuada purus at metus bibendum
          </p>
          <div className="presentation-socials">
            <Github />
            <Linkedin />
          </div>
        </div>
      </header>
      <main>
        <h2>My work</h2>
        <Project
          name="Project name"
          description="Short description of the project. Just a couple sentences will do."
          imgURL="/images/coding.jpg"
        />
        <Project
          name="Project name"
          description="Short description of the project. Just a couple sentences will do."
          imgURL="/images/coding.jpg"
        />
        <Project
          name="Project name"
          description="Short description of the project. Just a couple sentences will do."
          imgURL="/images/coding.jpg"
        />
        <Project
          name="Project name"
          description="Short description of the project. Just a couple sentences will do."
          imgURL="/images/coding.jpg"
        />
        <Project
          name="Project name"
          description="Short description of the project. Just a couple sentences will do."
          imgURL="/images/coding.jpg"
        />
        <Project
          name="Project name"
          description="Short description of the project. Just a couple sentences will do."
          imgURL="/images/coding.jpg"
        />
      </main>
      <footer>
        <h2 className="contact-me">Contact me</h2>
        <p>
          Please get in touch if you think my work could be mutually beneficial!
        </p>
        <p className="address">Via Anna Frank, 17, 10072 Mappano TO, Italy</p>

        <p className="phone">
          <Phone /> +39 389 994 8706
        </p>
        <p className="mail">
          <Mail />{" "}
          <a target="_blank" rel="noreferrer" href="mailto:petngalan@gmail.com">
            petngalan@gmail.com
          </a>
        </p>
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
      </footer>
    </div>
  );
}

export default App;
