
import TopSelling from "./components/TopSelling";
import NewArrivals from "./components/NewArrivals";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import DressStyle from "./components/DressStyle";

export default function Home() {
  return (
   <div>
    <Hero />
    <Logo />
    <NewArrivals />
    <TopSelling />
    <DressStyle />
    <Reviews />
   </div>
  );
}
