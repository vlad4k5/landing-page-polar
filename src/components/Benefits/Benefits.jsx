import s from "./Benefits.module.scss"
import vehicleImg from "../../assets/images/vehicle.svg"
import cocktailImg from "../../assets/images/cocktail.svg"
import moneyImg from "../../assets/images/money.svg"
import deliveryImg from "../../assets/images/delivery.svg"


const Benefits = () => {
  return <div className={s.benefitsContainer}>

    <div className={s.benefitsBlock}>
      <img src={vehicleImg} alt="Free shipping"/>
      <h3>Free Shipping</h3>
      <p>Last Chance! Free shipping on all orders ends today.</p>
    </div>
    
    <div className={s.benefitsBlock}>
      <img src={cocktailImg} alt="Quick Packaging"/>
      <h3>Quick Packaging</h3>
      <p>Last Chance! Free shipping on all orders ends today.</p>
    </div>

    <div className={s.benefitsBlock}>
      <img src={moneyImg} alt="100% Money Back"/>
      <h3>100% Money Back</h3>
      <p>Last Chance! Free shipping on all orders ends today.</p>
    </div>

    <div className={s.benefitsBlock}>
      <img src={deliveryImg} alt="Fast Delivery"/>
      <h3 className={s.deliveryH3}>Fast Delivery</h3>
      <p>Last Chance! Free shipping on all orders ends today.</p>
    </div>

  </div>
}

export default Benefits