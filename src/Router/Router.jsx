import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import ApplyJobForm from "../Pages/ApplyJobForm";
import Salary from "../Pages/Salary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/apply-job/:id", element: <ApplyJobForm /> },
      { path: "/salary", element: <Salary /> },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`https://jobportal-api-mj29.onrender.com/all-jobs/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
];

  const router = createBrowserRouter(routes, {
    basename: "/JobPortal_Client", // Set the base URL for GitHub Pages
  });

export default router;