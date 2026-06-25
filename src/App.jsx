import {BrowserRouter,RouterProvider, Outlet,createBrowserRouter,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CoinDetails from "./pages/CoinDetails";
import NotFound from "./pages/NotFound";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/coin/:id",
        element: <CoinDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }

]);


export default function App() {
  return <RouterProvider router={router} />;
}


