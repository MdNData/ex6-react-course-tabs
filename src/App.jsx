import { useEffect, useState } from "react";
import { Loading } from "./assets/components/Loading/Loading";
import { Jobs } from "./assets/components/Jobs/Jobs";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  //if not loaded
  if (data == null) {
    return <Loading />;
  }

  console.log(data);
  return <Jobs data={data} />;
};
export default App;
