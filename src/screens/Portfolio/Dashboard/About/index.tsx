import DownloadIcon from "@mui/icons-material/Download";

const AboutMe = () => {
  return (
    <section id="about">
      <h1 className="main_title">
        About <span>Me</span>
        <p>Resume</p>
      </h1>
      <div className="main_data">
        <div className="data">
          <div>
            <h3>Personal Info</h3>
            <div>
              <div>
                <p>
                  First Name: <span>Vipul</span>
                </p>
                <p>
                  Last Name: <span>Waghmare</span>
                </p>
              </div>
              <div>
                <p>
                  Address: <span>Navi Mumbai, India</span>
                </p>
                <p>
                  Nationality: <span>Indian</span>
                </p>
                <p>
                  Email: <span>vipulwaghmare222@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <button
            className="primary_button"
            onClick={() =>
              window.open("https://read.cv/vipulwaghmare", "_blank")
            }
          >
            Download CV
            <div>
              <DownloadIcon />
            </div>
          </button>
          <div>
            <h3>Experience</h3>
            <p>iConnect Info Solutions (Oct 2020 - Current)</p>
          </div>
          <div>
            <h3>Education</h3>
            <p>B.E. Mechanical (Mumbai University) (2015 - 2019)</p>
          </div>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div>
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScipt</div>
            <div>TypeScript</div>
            <div>React</div>
            <div>NodeJs</div>
            <div>Express</div>
            <div>Flask</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
