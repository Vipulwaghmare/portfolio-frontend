import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

const socialData = [
  {
    Icon: GitHubIcon,
    link: "https://github.com/Vipulwaghmare",
  },
  {
    Icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/vipulwaghmare/",
  },
  {
    Icon: TwitterIcon,
    link: "https://twitter.com/waghmarevipul22",
  },
];

const personalData = [
  {
    label: "Address",
    value: "Navi Mumbai, India",
  },
  {
    label: "Email",
    value: "vipulwaghmare222@gmail.com",
  },
];

const ContactMe: React.FC = () => {
  return (
    <section id="contact-me">
      <h1 className="main_title">
        Get In <span>Touch</span>
        <p>Contact</p>
      </h1>
      <div className="data-container">
        <div className="personal_details">
          <div className="data">
            <h4>Don't Be Shy!</h4>
            <p>Feel free to get in touch with me.</p>
            {personalData.map(({ label, value }) => (
              <div key={label}>
                <p className="label">{label}</p>
                <p className="value">{value}</p>
              </div>
            ))}
            {/* <div>
              <p>Address:</p> Navi Mumbai, India
            </div>
            <div>Email: vipulwaghmare222@gmail.com</div> */}
          </div>
          <div className="social">
            {socialData.map(({ link, Icon }) => (
              <a href={link} target="_blank" key={link}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <form>
          <div className="user_data">
            <input placeholder="Your Name"></input>
            <input placeholder="Your Email"></input>
          </div>
          <input placeholder="Subject"></input>
          <textarea placeholder="Write your message here..."></textarea>
          <button className="primary_button">
            Send Message
            <div>
              <SendIcon />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
