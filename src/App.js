import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import QuizDetails from "./components/QuixDetails/QuizDetails";
import Quiz from "./components/Quiz/Quiz";
import Rechart from "./components/Recharts/Rechart";
import Main from "./Main/Main";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: async () =>
        fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/quiz", element: <Quiz /> },
        {
          path: "/quiz/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <QuizDetails />,
        },
        { path: "/rechart", element: <Rechart /> },
        { path: "/blogs", element: <Blogs /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
