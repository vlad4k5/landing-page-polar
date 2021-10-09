import s from "./App.module.scss"
import Benefits from "./components/Benefits/Benefits";
import BrownSugar from "./components/BrownSugar/BrownSugar";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import OurProduct from "./components/OurProduct/OurProduct";
import SimpleWayToOrder from "./components/SimpleWayToOreder/SimpleWayToOrder";


const App = () => {
  return <div className={s.app}>
    <Header />
    <Benefits />
    <BrownSugar />
    <OurProduct />
    <SimpleWayToOrder />
    <Contact />
  </div>
}
export default App;