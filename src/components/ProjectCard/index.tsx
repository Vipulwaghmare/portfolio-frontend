import {
  IconButton,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { ProjectCardInterface } from "../../interfaces/projects/card";

const ProjectCard: React.FC<ProjectCardInterface> = ({
  title,
  description,
  detailPath,
  frontendLink,
  backendLink,
  imagePath,
}) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia component="img" alt={title} height="140" image={imagePath} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(detailPath)}>View</Button>
        {frontendLink ? (
          <IconButton onClick={() => navigate(frontendLink)}>
            <GitHubIcon />
          </IconButton>
        ) : null}
        {backendLink ? (
          <IconButton onClick={() => navigate(backendLink)}>
            <GitHubIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
