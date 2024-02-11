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
  Pricing,
  VideoProduction,
  FacebookAdsAgency,
  ContactUs,
  Explore,
} from "./pages";
import MainFooter from "./components/MainFooter";
import ErrorPage from "./components/ui/ErrorPage";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  
  // Check if the current path is "/explore"
  const isExplorePage = location.pathname === "/explore";
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      {!isExplorePage && <MainFooter />}
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
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/explore",
        element: <Explore />,
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
