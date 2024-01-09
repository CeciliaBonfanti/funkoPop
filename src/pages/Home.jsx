import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MainContent } from "../components/Main-content";
import { Slider } from "../components/Slider";
export function Home() {
    return (
      <>
       <MyNavbar />
        <MainContent />
        <Slider/>
        <Footer />
      </>
    );
  }