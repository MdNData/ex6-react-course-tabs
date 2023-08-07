import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const Description = ({ item }) => {
  return (
    <article>
      <h3>{item.title}</h3>
      <p className="job-company">{item.company}</p>
      <p className="job-date">{item.dates}</p>
      {item["duties"].map((item, key) => {
        return (
          <div className="job-desc">
            <MdOutlineKeyboardDoubleArrowRight className="job-icon" />
            <p>{item}</p>
          </div>
        );
      })}
    </article>
  );
};
