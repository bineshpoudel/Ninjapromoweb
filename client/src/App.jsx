import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header";
import {
  About,
  Home,
  MobileAppDevelopment,
  Seo,
  SocialMedia,
  WebDesign,
  VideoProduction,
  FacebookAdsAgency,
} from "./pages";
import MainFooter from "./components/MainFooter";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <MainFooter />
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
      {
        path: "services/web-design",
        element: <WebDesign />,
      },
      {
        path: "services/social-media",
        element: <SocialMedia />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
