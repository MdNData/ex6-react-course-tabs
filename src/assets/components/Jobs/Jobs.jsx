import { useEffect, useState } from "react";
import { Nav } from "./Nav/Nav";

export const Jobs = ({ data }) => {
  const searchUniques = () => {
    if (data != undefined) {
      let categoryArray = [];
      data.forEach((item) => {
        if (categoryArray.length == 0) {
          categoryArray.push(item.company);
        } else if (categoryArray.indexOf(item.company) != -1) {
          return;
        } else {
          categoryArray.push(item.company);
        }
      });
      return categoryArray;
    }
  };

  const [menu, setMenu] = useState(searchUniques());

  const [job, setJob] = useState(menu[0]);

  return (
    <section className="jobs-center">
      <Nav menu={menu} setJob={setJob} job={job} />
      <article>
        <h3>lalalal</h3>
        <p className="job-company">Ciao</p>
        <p className="job-date">3333</p>
        <div className="job-desc">
          <h6 className="job-icon">&</h6>
          <p>sdkjsdfbsvbns</p>
        </div>
      </article>
    </section>
  );
};
