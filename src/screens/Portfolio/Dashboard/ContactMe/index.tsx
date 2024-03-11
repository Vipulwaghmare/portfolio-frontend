import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import { sendContactMeEmail } from "../../../../services/otherApi";

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
  // {
  //   label: "Address",
  //   value: "Navi Mumbai, India",
  // },
  {
    label: "Email",
    value: "vipulwaghmare222@gmail.com",
  },
];

const ContactMe = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSendMessage = async () => {
    try {
      await sendContactMeEmail({
        username,
        email,
        message,
        subject,
      });
      setSuccess("Message sent successfully");
    } catch (e) {
      setError("Error while sending message. Please try again later");
    }
  };
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
            <input
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p className="success">{success}</p>
          <p className="error">{error}</p>
          <button className="primary_button" onClick={onSendMessage}>
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
