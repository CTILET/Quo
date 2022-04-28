import "./styles.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Woman from "./components/woman-graphics/woman";
import Currency from "./components/currency-page/currency";
import Work from "./components/quo-work/work";
import Worthy from "./components/worthy-group/worthy";
import Cards from "./components/capable-cardspage/cards";
import StayUpdate from "./components/stay-updatepage/stay-update";
import Map from "./components/map/map";
import Satisfaction from "./components/satisfaction-page/satisfaction";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Woman />
      <Currency />
      <Work />
      {/* <Worthy /> */}
      {/* <Cards /> */}
      <StayUpdate />
      <Map />
      <Satisfaction />
      <Footer />
    </>
  );
}
