import { createHashRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import Services from "./pages/Services";

const routes = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactPage /> },
      { path: "properties", element: <Properties /> },
      { path: "properties/:id", element: <PropertyDetails /> },
      { path: "services", element: <Services /> },
    ],
  },
]);

export default routes;
