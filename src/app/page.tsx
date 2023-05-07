import Header from "@/components/Header";
import Footer from "@/components/footerComponent";
import MainHome from "@/components/mainHome";
import { NavBar } from "@/components/navBar";


export default function Home(){
  return(
    <div className="h-screen w-screen flex flex-col">
      <Header/>
      <NavBar/>
      <MainHome/>
      <Footer/>
    </div>
  )
}