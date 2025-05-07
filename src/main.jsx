import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Search from "./components/Search.jsx";
// import BookDetails from "./components/BookDetails.jsx";
// import Demo from "./components/Demo.jsx";
import { HiH1 } from "react-icons/hi2";
import Memo from "./components/Memo.jsx";

//// lazy loading of components
const About = lazy(() => import("./components/About.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Demo = lazy(() => import("./components/Demo.jsx"));
const BookDetails = lazy(() => import("./components/BookDetails.jsx"));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/book/:id",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <BookDetails />
          </Suspense>
        ),
      },
      {
        path: "/demo",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Demo />
          </Suspense>
        ),
      },
      {
        path: "/memo",
        element: <Memo />,
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
