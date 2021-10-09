import s from "./BrownSugar.module.scss"
import brownSugarImg from "../../assets/images/brownSugar.png"

const BrownSugar = () => {
  return <div className={s.brownSugarContainer}>
    
    <div className={s.infoBlock}>
      <h2>Brown Sugar Oatmea</h2>
      <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
      <button>See Details</button>
    </div>
    
    <img className={s.brownSugarImg} src={brownSugarImg} alt="Brown Sugar Oatmea"/>
    <div className={s.icecreamShadow}></div>
  </div>
}

export default BrownSugar
