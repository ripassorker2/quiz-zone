import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  // console.log(topic);
  return (
    <div className="max-w-xs p-5 bg-black text-white rounded-md shadow-lg w-72  duration-300 hover:bg-pink-500">
      <img
        src={logo}
        alt=""
        className="object-cover border-2 border-white object-center  w-full rounded-md h-3/5 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2 ">
        <h2 className="text-xl  font-semibold tracking-wide font-serif">
          Topis: {name}
        </h2>
      </div>
      <p className="dark:text-gray-100">Quiz amount: {total}</p>
      <Link to={`/quiz/${id}`}>
        <button className="py-2 w-full mt-6  font-semibold rounded bg-blue-600 text-white ">
          Play Quiz
        </button>
      </Link>
    </div>
  );
};

export default Topic;
