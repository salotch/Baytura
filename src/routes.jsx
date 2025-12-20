import { createHashRouter } from "react-router-dom";
import AppLayout from "/src/components/layout/AppLayout";
import Home from "/src/pages/Home";
import Properties from "/src/pages/Properties";
import PropertyDetails from "/src/pages/PropertyDetails";
import ContactPage from "/src/pages/ContactPage";
import About from "/src/pages/About";
import Services from "/src/pages/Services";

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
