import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CreateMainContent } from "../components/Create-main-content";
export function Create() {
    return (
      <>
        <MyNavbar/>
        <CreateMainContent/>
        <Footer/>
      </>
    );
  }