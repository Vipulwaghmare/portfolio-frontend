import ContactMe from "./ContactMe";
import AboutMe from "./About";
import "./index.scss";
import profilePic from "../../../assets/profile_pic.jpg";
import topWave from "/wave.svg";

const Dashboard = () => {
  return (
    <div className="portfolio_container">
      <header>
        <div></div>
        <div className="nav-container">
          <a href={"#about"}>About Me</a>
          <a href={"#contact-me"}>Contact Me</a>
          <a href="/projects">Projects</a>
        </div>
      </header>
      <main>
        <img src={topWave} className="wave" />
        <section id="landing">
          <div>
            <img src={profilePic} width={500} height={500} />
          </div>
          <div className="info">
            <h1>
              Hi,
              <br />
              <span className="name">I'm Vipul Waghmare</span>
              <br />
              <span>MERN Developer</span>
            </h1>
            <p>
              I'm a passionate frontend developer dedicated to creating stunning
              and intuitive web experiences. With expertise in HTML, CSS,
              JavaScript, React and Express. I craft user-friendly websites that
              blend form and function seamlessly. I thrive on challenges,
              embrace new technologies, and believe in pixel-perfect design.
              Let's collaborate to transform your web ideas into reality and
              make a lasting digital impact.
            </p>
          </div>
        </section>
        <AboutMe />
        <ContactMe />
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
