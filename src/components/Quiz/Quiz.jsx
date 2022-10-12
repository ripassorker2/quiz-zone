import React, { useContext } from "react";
import { CoursesContext } from "../../Main/Main";
import Topic from "../Topic/Topic";

const Quiz = () => {
  const topics = useContext(CoursesContext);

  return (
    <div>
      <section>
        <h2 className="text-center md:text-6xl text-4xl font-serif font-semibold border-b-2 pb-3 mb-9">
          Quiz Lists
        </h2>
        <div className="my-11 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 md:gap-8  gap-y-8   md:w-3/4 w-3/5 m-auto ">
          {topics.data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
