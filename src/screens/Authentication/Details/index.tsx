import "./index.scss";

const AuthDetails = () => {
  return (
    <div className="auth_project_details" onClick={(e) => e.stopPropagation()}>
      <h1>Authentication</h1>
      <p>
        This project implements user authentication using React, React Query,
        React Hook Form, Express, and JWT token. It covers all the basic
        authentication use-cases like registering a new user, logging in,
        logging out, updating user details, and changing password.
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
