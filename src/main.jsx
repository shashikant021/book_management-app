import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Search from "./components/Search.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Demo from "./components/Demo.jsx";

//Create Routing Configuration
const appRouter = createBrowserRouter([
  /// individual Routing
  // {
  //   path: "/",
  //   element: <App />,
  //   errorElement: <Error />
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },

  //// Children Routing
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Search />,
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
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
