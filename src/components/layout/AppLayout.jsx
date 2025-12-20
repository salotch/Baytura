import { Outlet } from "react-router-dom";
import Footer from "/src/components/layout/Footer";
import Header from "/src/components/layout/Header";
import ScrollToTop from "/src/components/ScrollTop";

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
