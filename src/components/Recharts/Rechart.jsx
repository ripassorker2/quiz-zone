import React, { useContext } from "react";
// import { QuizContext } from "../Root/Root";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { CoursesContext } from "../../Main/Main";

const Rechart = () => {
  const quizData = useContext(CoursesContext).data;

  return (
    <div>
      <div className="flex text-center m-auto justify-center md:w-3/4 my-7 text-white">
        <BarChart
          className="w-full h-20"
          width={350}
          height={440}
          data={quizData}
          masring={{
            right: 31,
            leftt: 31,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="total" fill="gray" />
        </BarChart>
      </div>
    </div>
  );
};

export default Rechart;
