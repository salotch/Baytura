import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // shared layout (Navbar + Footer)
    children: [
      { index: true, element: <Home /> }, // "/" default
      { path: "about", element: <About /> },
      { path: "Contact", element: <ContactPage /> },
      { path: "Properties", element: <Properties /> },
      { path: "/Properties/:id", element: <PropertyDetails /> },
      { path: "Services", element: <Services /> },
    ],
  },
]);

export default router;
