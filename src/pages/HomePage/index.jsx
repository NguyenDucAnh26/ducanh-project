import * as S from "./styles";
import Slider from "./components/Slider";
import HomeProduct from "./components/HomeProduct";
import HomeCollection from "./components/HomeCollection";
import HomeAbout from "./components/HomeAbout";
import HomeMore from "./components/HomeMore";
function HonePage() {
  return (
    <div>
      <Slider />
      <HomeProduct />
      <HomeCollection />
      <HomeAbout />
      <HomeMore />
    </div>
  );
}

export default HonePage;
