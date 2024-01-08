import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LoginMainContent } from "../components/Login-main-content";
export function Login() {
    return (
      <>
        <MyNavbar/>
        <LoginMainContent/>
        <Footer/>
      </>
    );
  }