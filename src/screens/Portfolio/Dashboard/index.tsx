// import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContactMe from "../ContactMe";
import AboutMe from "../About";

const Dashboard: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <>
      <header>
        <a href={"#about"}>About Me</a>
        <a href={"#contact-me"}>Contact Me</a>
        <a href={"#projects"}>Projects</a>
      </header>
      <main>
        <section>
          <h1>Hi,</h1>
          <h1>I'm Vipul Waghmare</h1>
          <h1>MERN Developer</h1>
        </section>
        <AboutMe />
        <ContactMe />
      </main>
      <footer>
        <GitHubIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </footer>
    </>
  );
};

export default Dashboard;
