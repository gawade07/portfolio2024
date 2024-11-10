import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayput from "./components/UI/AppLayput";
import { BioProvider } from "./components/UI/ContextApi";
import About from "./components/page/About";
import Home from "./components/page/Home";
import Contact from "./components/page/Contact";
import Project from "./components/page/Project";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayput />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ]
);

const queryClient =new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

    <BioProvider>
      <RouterProvider router={router}></RouterProvider>
    </BioProvider>
    </QueryClientProvider>

  );
};

export default App;
