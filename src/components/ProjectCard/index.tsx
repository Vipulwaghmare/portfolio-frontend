import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProjectModel from "../ProjectModel";

export type ProjectCardInterface = {
  title: string;
  description: string;
  detailPath: string;
  imagePath: string | null;
  Details: () => JSX.Element;
};

// interface modelCompInterface {
//   onClose: () => void;
// }

type TProjectCardProps = ProjectCardInterface & {
  frontendLink?: string;
  backendLink?: string;
};
// interface testInterface extends modelCompInterface {}
// const Test = ({ onClose }: testInterface) => {
//   return (
//     <h1>
//       <button onClick={onClose}>Close</button>
//     </h1>
//   );
// };

const ProjectCard = ({
  title,
  description,
  detailPath,
  frontendLink,
  backendLink,
  imagePath,
  Details,
}: TProjectCardProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="project-card">
      {imagePath && (
        <div className="img-container">
          <img alt={title} height="140" src={imagePath} />
        </div>
      )}
      <div className="details">
        <div>
          <p className="title">{title}</p>
          <p>{description}</p>
        </div>
        <div className="btn-container">
          <button onClick={() => setOpen(true)}>
            <InfoIcon />
          </button>
          <button onClick={() => navigate(detailPath)}>
            <OpenInNewIcon />
          </button>
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
              Component={Details}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
