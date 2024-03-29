import { ExternalLink, Github } from "lucide-react";

function Project({ name, description, imgURL, liveCodeURL, repositoryURL }) {
  return (
    <div className="project-card">
      <img src={imgURL} className="project-screenshot" alt="" />
      <div className="project-info">
        <div className="project-header">
          <h3 className="project-name">{name}</h3>
          <div className="project-links">
            <a target="_blank" rel="noreferrer" href={repositoryURL}>
              <Github />
            </a>
            {liveCodeURL != null && (
              <a target="_blank" rel="noreferrer" href={liveCodeURL}>
                <ExternalLink />
              </a>
            )}
          </div>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default Project;
