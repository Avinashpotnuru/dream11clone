import Home from "@/pages";
import DesktopNavBar from "../DesktopNavBar";
import Footer from "../Footer";
import SideNavbar from "../Sidenavbar";

function Layout({ children }) {
  return (
    <div className=" overflow-y-auto">
      <SideNavbar />
      <DesktopNavBar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
