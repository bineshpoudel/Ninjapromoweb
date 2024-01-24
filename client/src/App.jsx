import Header from "./components/Header";
import { Home, Seo } from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/seo",
        element: <Seo />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
