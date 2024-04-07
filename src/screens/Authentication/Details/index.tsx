import "./index.scss";

const AuthDetails = () => {
  return (
    <div className="auth_project_details" onClick={(e) => e.stopPropagation()}>
      <h1>Authentication</h1>
      <p>
        <p>
          <strong>Stack: </strong> React Query, React Hook Form, Express, JWT
          Token, MongoDB, Nodemailer
        </p>
        <p>
          <strong>Features Include:</strong>
          <ul style={{ listStyle: "none" }}>
            <li>
              <em>Sign Up</em>: Register using Email and password
            </li>
            <li>
              <em>Sign In</em>: Login user with Email and password
            </li>
            <li>
              <em>Forgot Password</em>: Send Email to user to reset password and
              use the link from email to change user password
            </li>
            <li>
              <em>Update Password</em>: User can update password with using
              their old password
            </li>
          </ul>
        </p>
      </p>
      <div className="links">
        <a
          href="https://github.com/Vipulwaghmare/portfolio-frontend/tree/master/src/screens/Authentication"
          target="_blank"
        >
          Fronted Code
        </a>
        <a
          href="https://github.com/Vipulwaghmare/portfolio-backend/blob/master/routes/auth.routes.js"
          target="_blank"
        >
          Backend Code
        </a>
      </div>
    </div>
  );
};

export default AuthDetails;
