import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AdminMainContent } from "../components/Admin-main-content";
export function Admin() {
    return (
      <>
        <MyNavbar/>
        <AdminMainContent/>
        <Footer/>
      </>
    );
  }