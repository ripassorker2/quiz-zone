import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../../Main/Main";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useContext(CoursesContext);
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-10 lg:px-32 lg:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold font-serif leading-none sm:text-6xl">
              Hello !! <br />
              Welcome to <br /> Quiz Zone !!
            </h1>
            <p className="text-gray-300 py-4 text-xl">
              This is an online quiz practice platfrom !! You can practice hare
              any type of language or css framework as like JavaScript, Html,
              Css, Bootstarp, Sass ,React etc!!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to={"/quiz"}
                className="px-8 py-3 font-semibold rounded bg-blue-600 text-white hover:bg-transparent duration-200 hover:text-white hover:border-2 hover:border-purple-600"
              >
                More Details{" "}
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72  lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1665420776~exp=1665421376~hmac=3655cd18d5b83166d39827450e4f8dd2419bff267be1ca5c2723158837d00e74"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center md:text-6xl text-4xl font-serif font-semibold border-b-2 pb-4 my-9">
          Quiz Lists
        </h2>
        <div className="mb-9 mt-11 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 md:gap-8  gap-y-8   md:w-3/4 w-3/5 m-auto ">
          {topics.data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
