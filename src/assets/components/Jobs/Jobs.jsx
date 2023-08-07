import { useEffect, useState } from "react";
import { Nav } from "./Nav/Nav";
import { Description } from "./Description/Description";

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
      {data.map((item, key) => {
        return item.company == job ? <Description key={key} item={item} /> : "";
      })}
    </section>
  );
};
