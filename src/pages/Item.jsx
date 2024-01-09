import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ItemMainContent } from "../components/Item-main-content"
import { Slider } from "../components/Slider"
export function Item() {
    return (
      <>
        <MyNavbar/> 
        <ItemMainContent/>
        <Slider/>
        <Footer/>
      </>
    );
  }