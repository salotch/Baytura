import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../ScrollTop";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop></ScrollToTop>
      {/* Page content */}
      <main className="flex-grow">
        <Outlet /> {/* renders the active page */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
