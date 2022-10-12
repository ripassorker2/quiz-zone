import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const handleShowAnswer = (correctAnswer) => {
    return toast.info(`Correct answer is : ${correctAnswer} `, {
      autoClose: 2000,
    });
  };

  const handleCorrectOrIncorrect = (correctAnswer, options) => {
    if (correctAnswer === options) {
      return toast.success("Wow !! This answer is correct !!", {
        autoClose: 2000,
      });
    } else {
      return toast.warn("opps !! This answer is incorrect !!", {
        autoClose: 2000,
      });
    }
  };

  const quistions = useLoaderData().data.questions;
  console.log(quistions[1]);
  return (
    <div className="my-9 font-serif">
      <h1 className="text-center md:text-5xl text-3xl pb-5 italic te font-serif my-6 text-blue-700 border-b-2">
        Here is quiz detail !!
      </h1>
      <ol>
        {quistions.map(({ question, id, correctAnswer, options }) => (
          // console.log(correctAnswer),
          <div
            className="bg-black  md:w-3/4 m-auto p-9 mt-5 rounded-md"
            key={id}
          >
            <div className="flex justify-between items-center">
              <li className="text-2xl list-decimal  my-5 text-gray-200 ">
                Quistion :{question}
              </li>
              <div onClick={() => handleShowAnswer(correctAnswer)}>
                <BsEyeFill size={25} className="text-blue-800" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 text-xl text-white">
              <p
                onClick={() =>
                  handleCorrectOrIncorrect(correctAnswer, options[0])
                }
                className="p-3 bg-slate-600 rounded-lg m-5 hover:bg-pink-600 duration-300"
              >
                A . {options[0]}
              </p>

              <p
                onClick={() =>
                  handleCorrectOrIncorrect(correctAnswer, options[1])
                }
                className="p-3 bg-slate-600 rounded-lg m-5 hover:bg-pink-600 duration-300"
              >
                B . {options[1]}
              </p>

              <p
                onClick={() =>
                  handleCorrectOrIncorrect(correctAnswer, options[2])
                }
                className="p-3 bg-slate-600 rounded-lg m-5 hover:bg-pink-600 duration-300"
              >
                C . {options[2]}
              </p>

              <p
                onClick={() =>
                  handleCorrectOrIncorrect(correctAnswer, options[3])
                }
                className="p-3 bg-slate-600 rounded-lg m-5 hover:bg-pink-600 duration-300"
              >
                D . {options[3]}
              </p>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default QuizDetails;
