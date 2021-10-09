import s from "./App.module.scss"
import Benefits from "./components/Benefits/Benefits";
import BrownSugar from "./components/BrownSugar/BrownSugar";
import Header from "./components/Header/Header";
import OurProduct from "./components/OurProduct/OurProduct";


const App = () => {
  return <div className={s.app}>
    <Header />
    <Benefits />
    <BrownSugar />
    <OurProduct />
  </div>
}
export default App;