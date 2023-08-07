export const Nav = ({ menu, setJob, job }) => {
  return (
    <nav className="btn-container">
      {menu.map((item, key) => {
        return (
          <button
            key={key}
            onClick={() => {
              setJob(item);
            }}
            className={"job-btn" + (item == job ? " active-btn" : "")}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
};
