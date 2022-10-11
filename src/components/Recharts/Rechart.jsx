import React, { useContext } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { CoursesContext } from "../../Main/Main";

const Rechart = () => {
  const topics = useContext(CoursesContext);
  return (
    <div className="text-black text-2xl text-center">
      <h1>This is reacherts </h1>
    </div>
  );
};

export default Rechart;
