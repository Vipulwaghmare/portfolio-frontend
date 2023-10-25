import DownloadIcon from "@mui/icons-material/Download";

const AboutMe: React.FC = () => {
  return (
    <section id="about">
      <h1 className="main_title">
        About <span>Me</span>
        <p>Resume</p>
      </h1>
      <div className="main_data">
        <div className="data">
          <div>
            <p>Personal Info</p>
          </div>
          <button className="primary_button">
            Send Message
            <div>
              <DownloadIcon />
            </div>
          </button>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascipt</div>
            <div>React</div>
            <div>NodeJs</div>
            <div>Flask</div>
          </div>
        </div>
      </div>
      <div>
        <h3>Experience & Education</h3>
        <p>Iconnect (Oct 2020 - Current)</p>
      </div>
    </section>
  );
};

export default AboutMe;
