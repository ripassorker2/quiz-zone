import React, { useContext } from "react";
// import { QuizContext } from "../Root/Root";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { CoursesContext } from "../../Main/Main";

const Rechart = () => {
  const quizData = useContext(CoursesContext).data;

  return (
    <div>
      <div className="flex text-center m-auto justify-center md:w-3/4 my-7 text-white">
        <LineChart width={400} height={400} data={quizData}>
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />

          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Rechart;
