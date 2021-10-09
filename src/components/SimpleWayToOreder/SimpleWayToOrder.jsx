import s from "./SimpleWayToOrder.module.scss"
import phoneImg from "../../assets/images/phone.png"
import selectYourFood from "../../assets/images/selectYourFood.svg"
import addToCart from "../../assets/images/addToCart.svg"
import orderYourFood from "../../assets/images/orderYourFood.svg"
import googlePlay from "../../assets/images/googlePlay.png"
import appStore from "../../assets/images/appStore.png"



const SimpleWayToOrder = () => {
  return <div className={s.simpleWayToOrder}>
    <img className={s.phoneImg} src={phoneImg} alt="Phone"/>

    <div className={s.infoBlock}>

      <h2>Simple Way To Order Your Food</h2>
      <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>

      <div className={s.steps}>
        <div className={s.step}>
          <div className={s.stepImgBlock}><img src={selectYourFood} alt="1)" /></div>
          <span>Select Your Food</span>
        </div>
        <div className={s.step}>
          <div className={s.stepImgBlock}><img src={addToCart} alt="2)" /></div>
          <span>Add To Cart</span>
        </div>
        <div className={s.step}>
          <div className={s.stepImgBlock}><img src={orderYourFood} alt="3)" /></div>
          <span>Order Your Food</span>
        </div>
      </div>

      <div className={s.stores}>
        <img src={googlePlay} alt="Google Play" />
        <img src={appStore} alt="App Store" />
      </div>
      

    </div>
  </div>
}
 export default SimpleWayToOrder