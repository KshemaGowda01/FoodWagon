
import Header from "./components/Header";
import Hero from "./components/Hero";
import DiscountCards from "./components/DiscountCards";
import HowItWorks from "./components/HowItWorks";
import PopularItems from "./components/PopularItems";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import SearchByFood from "./components/SearchByFood";
import AppFeatures from "./components/AppFeatures";
import PromoBanners from "./components/PromoBanners";
import Footer from "./components/Footer";

import "./HeaderHero.css";
import "./DiscountHow.css";
import "./FoodSections.css";
import "./SearchByFood.css";
import "./AppFeatures.css";
import "./PromoBanners.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <DiscountCards />
        <HowItWorks />
        <PopularItems />
        <FeaturedRestaurants />
         <SearchByFood />
         <AppFeatures />
         <PromoBanners />
      </main>
      <Footer />
    </>
  );
}

export default App;
