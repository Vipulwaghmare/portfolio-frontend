// import {
//   IconButton,
//   Card,
//   CardActions,
//   CardMedia,
//   CardContent,
//   Button,
//   Typography,
// } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { ProjectCardInterface } from "../../interfaces/projects/card";
import { useState } from "react";
import ProjectModel from "../ProjectModel";
interface modelCompInterface {
  onClose: () => void;
}
interface testInterface extends modelCompInterface {}
const Test: React.FC<testInterface> = ({ onClose }) => {
  return (
    <h1>
      <button onClick={onClose}>Close</button>
    </h1>
  );
};

const ProjectCard: React.FC<ProjectCardInterface> = ({
  title,
  description,
  detailPath,
  frontendLink,
  backendLink,
  imagePath,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="project-card">
      <div className="img-container">
        <img alt={title} height="140" src={imagePath} />
      </div>
      <div className="details">
        <div>
          <p className="title">{title}</p>
          <p>{description}</p>
        </div>
        <div className="btn-container">
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => navigate(detailPath)}>View</button>
          {frontendLink ? (
            <button onClick={() => navigate(frontendLink)}>
              <GitHubIcon />
            </button>
          ) : null}
          {backendLink ? (
            <button onClick={() => navigate(backendLink)}>
              <GitHubIcon />
            </button>
          ) : null}
          {open && (
            <ProjectModel
              showModal={open}
              onClose={() => setOpen(false)}
              Component={Test}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
