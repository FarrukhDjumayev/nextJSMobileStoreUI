import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import Products from "./components/Products";
import Trending from "./components/TrendingCategories";


export default function Home() {
  return (
    <div>
      <MainContent />
      <Trending/>
      <Products/>
      <Banner/>
    </div>
  );
}
