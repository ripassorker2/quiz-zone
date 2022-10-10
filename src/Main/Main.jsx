import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const CoursesContext = createContext([]);

const Main = () => {
  const courses = useLoaderData();
  return (
    <div>
      <CoursesContext.Provider value={courses}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </CoursesContext.Provider>
    </div>
  );
};

export default Main;
