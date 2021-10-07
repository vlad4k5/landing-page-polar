import s from "./Header.module.scss"
import logo from "../../assets/images/logo.png"
import icecreamImg from "../../assets/images/headerIcecream.png"
import milkImg from "../../assets/images/milk.png"

const Header = () => {
  return <div className={s.headerContainer}>
    <header>
      <img src={logo} alt="Polar ice cream" />
      <nav>
        <button className={s.active}>Home</button>
        <button>Product</button>
        <button>Pricing</button>
        <button>Testimonials</button>
        <button>Contact Us</button>
      </nav>

      <button className={s.buyNowButton}>Buy Now</button>
    </header>

    <div className={s.headerContent}>
      <div className={s.infoBlock}>
        <span className={s.subtitle}>Sweet fun, full of milk.</span>
        <h1>Feel inside cold with our delicious <span>ice-cream.</span></h1>
        <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
        <button>Buy Now</button>
      </div>
    </div>


    <img className={s.icecreamImg} src={icecreamImg} alt="Icecream" />
    <img className={s.milkImg} src={milkImg} alt="Milk" />
    <div className={s.ellipse}></div>
    <div className={s.ellipseShadow}></div>
  </div>
}
export default Header