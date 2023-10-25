const ContactMe: React.FC = () => {
  return (
    <section id="contact-me">
      <h1>I Want to Hear From You</h1>
      <div>
        <div>Address: Navi Mumbai, India</div>
        <div>Email: vipulwaghmare222@gmail.com</div>
      </div>
      <div>
        <form>
          <input placeholder="Your Name"></input>
          <input placeholder="Your Email"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Write your message here..."></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
