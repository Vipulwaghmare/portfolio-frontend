import "./index.scss";

const SortDetails = () => {
  return (
    <div className="auth_project_details" onClick={(e) => e.stopPropagation()}>
      <h1>Sorting Algorithms</h1>
      <p>
        <p>
          <strong>Stack: </strong> React Hooks
        </p>
        <p>
          <strong>Available Algorithms:</strong>
          <ul style={{ listStyle: "none" }}>
            <li>
              <em>Bubble Sort</em>
            </li>
            <li>
              <em>Selection Sort</em>
            </li>
            <li>
              <em>Insertion Sort</em>
            </li>
          </ul>
        </p>
      </p>
      <div className="links">
        <a
          href="https://github.com/Vipulwaghmare/portfolio-frontend/tree/master/src/screens/Sorting"
          target="_blank"
        >
          Fronted Code
        </a>
      </div>
    </div>
  );
};

export default SortDetails;
