import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import AppsPage from './component/AppsPage.jsx';
import AppDetails from './component/AppDetails.jsx';
import InstallPage from './component/InstallPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/apps.json"),
        element: <Home></Home>
      },
      {
        path: "/apps",
        loader: () => fetch("/apps2.json"),
        element: <AppsPage></AppsPage>
      },
      {
        path: "/appdetails/:id",
        loader: async () => {
          const res1 = await fetch("/apps.json");
    const data1 = await res1.json();
    const res2 = await fetch("/apps2.json");
    const data2 = await res2.json();
    return [...data1, ...data2];
        },
        element: <AppDetails></AppDetails>
      },
      {
        path: "/install",
        element : <InstallPage></InstallPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
