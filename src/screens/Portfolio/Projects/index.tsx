import ProjectCard from "../../../components/ProjectCard";
import { ProjectCardInterface } from "../../../interfaces/projects/card";
import "./index.scss";

const projectData: ProjectCardInterface[] = [
  {
    title: "Authentication",
    description:
      "User Authentication with React Native, Express, React Query, React Hook Form",
    detailPath: "/overview/auth",
    imagePath: "",
  },
  {
    title: "Todo App",
    description: "Ecommerce with Redux toolkit, RTK Query",
    detailPath: "/overview/ecommerce",
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
    <div className="projects-container">
      <h1>Projects</h1>
      <div>
        {projectData.map((data, index) => {
          return <ProjectCard key={index} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
