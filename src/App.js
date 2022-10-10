import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Rechart from "./components/Recharts/Rechart";
import Main from "./Main/Main";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "quiz", element: <Quiz></Quiz> },
        { path: "/rechart", element: <Rechart></Rechart> },
        { path: "/blogs", element: <Blogs></Blogs> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
