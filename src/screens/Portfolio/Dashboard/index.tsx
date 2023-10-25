// import { useNavigate } from "react-router-dom";
import ContactMe from "./ContactMe";
import AboutMe from "./About";
import "./index.scss";

const Dashboard: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <div className="portfolio_container">
      <header>
        <div></div>
        <div className="nav-container">
          <a href={"#about"}>About Me</a>
          <a href={"#contact-me"}>Contact Me</a>
          <a href={"#projects"}>Projects</a>
        </div>
      </header>
      <main>
        <section>
          <h1>Hi,</h1>
          <h1>I'm Vipul Waghmare</h1>
          <h1>MERN Developer</h1>
          <p>
            I'm a passionate frontend developer dedicated to creating stunning
            and intuitive web experiences. With expertise in HTML, CSS,
            JavaScript, React and Express. I craft user-friendly websites that
            blend form and function seamlessly. I thrive on challenges, embrace
            new technologies, and believe in pixel-perfect design. Let's
            collaborate to transform your web ideas into reality and make a
            lasting digital impact.
          </p>
        </section>
        <AboutMe />
        <ContactMe />
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
