import "./index.scss";

const SortDetails = () => {
  return (
    <div className="auth_project_details" onClick={(e) => e.stopPropagation()}>
      <h1>Sorting Algorithms</h1>
      <p>
        This project implements sorting algorithms such as Bubble Sort,
        Insertion Sort, Selection Sort. It helps in visualizing the sorting
        process.
      </p>
      <p>The project helped in deeper understanding of how React hooks works</p>
      <div className="links">
        <a
          href="https://github.com/Vipulwaghmare/portfolio-frontend/tree/master/src/screens/Authentication"
          target="_blank"
        >
          Fronted Code
        </a>
      </div>
    </div>
  );
};

export default SortDetails;
