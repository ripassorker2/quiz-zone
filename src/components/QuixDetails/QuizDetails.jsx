import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const quistions = useLoaderData().data.questions;
  console.log(quistions);
  return (
    <div className="my-9">
      <h1 className="text-center md:text-5xl text-3xl pb-5 italic te font-serif my-6 text-blue-700">
        Here are all quiz details !!
      </h1>
      <div>
        {quistions.map(({ question, id, correctAnswer, options }) => (
          <div
            className="bg-black  md:w-3/4 m-auto p-9 mt-5 rounded-md"
            key={id}
          >
            <p className="text-2xl my-5 text-gray-200">Quistion :{question}</p>
            <div className="grid md:grid-cols-2 text-xl text-gray-400">
              <p className="p-2">A . {options[0]}</p>
              <p className="p-2">B . {options[1]}</p>
              <p className="p-2">C . {options[2]}</p>
              <p className="p-2">D . {options[3]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
