import { Grid } from "@mui/material";
import ProjectCard from "../../../components/ProjectCard";
import { ProjectCardInterface } from "../../../interfaces/projects/card";

const projectData: ProjectCardInterface[] = [
  {
    title: "Authentication",
    description:
      "User Authentication with React Native, Express, React Query, React Hook Form",
    detailPath: "/overview/auth",
    imagePath: "",
  },
  {
    title: "Ecommerce",
    description: "Ecommerce with Redux toolkit, RTK Query",
    detailPath: "/overview/ecommerce",
    imagePath: "",
  },
];

const Projects: React.FC = () => {
  return (
    <Grid container gap={2}>
      {projectData.map((data, index) => {
        return (
          <Grid item xs={12} md={6}>
            <ProjectCard key={index} {...data} />;
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Projects;
