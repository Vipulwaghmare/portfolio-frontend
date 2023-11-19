import ProjectCard from "../../../components/ProjectCard";
import { ProjectCardInterface } from "../../../interfaces/projects/card";
import "./index.scss";

const projectData: ProjectCardInterface[] = [
  // {
  //   title: "Portfolio",
  //   description:
  //     "Current portfolio made with React, SCSS only. More details below",
  //   detailPath: "/",
  //   imagePath: "",
  // },
  {
    title: "Authentication",
    description:
      "User Authentication with React, React Query, React Hook Form, Express, JWT token",
    detailPath: "/auth/login",
    imagePath: "",
  },
  {
    title: "Todo App",
    description: "Todo app with frontedn pagination, filtering, sorting",
    detailPath: "/todo",
    imagePath: "",
  },
  {
    title: "Ecommerce",
    description:
      "Ecommerce with Redux toolkit, RTK Query, Backend pagination, Infinity Scrolling",
    detailPath: "/shopping",
    imagePath: "",
  },
  {
    title: "Social",
    description: "Chat application with firebase",
    detailPath: "/social/login",
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
