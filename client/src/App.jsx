import Header from "./components/Header";
import { About, Home, MobileAppDevelopment, Seo } from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import VideoProduction from "./pages/VideoProduction";
import FacebookAdsAgency from "./pages/FacebookAdsAgency";

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
        path: "services/seo",
        element: <Seo />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "services/mobile-app-development",
        element: <MobileAppDevelopment />,
      },
      {
        path: "services/video-production",
        element: <VideoProduction />,
      },
      {
        path: "services/facebook-ads-agency",
        element: <FacebookAdsAgency />,
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
