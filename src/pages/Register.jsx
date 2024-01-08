import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { RegisterMainContent } from "../components/Register-main-content";

export function Register() {
    return (
      <>
        <MyNavbar/>
        <RegisterMainContent/>
        <Footer/>
      </>
    );
  }