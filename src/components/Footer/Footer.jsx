import s from "./Footer.module.scss"
import logoImg from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"
import paypal from "../../assets/images/paypal.png"
import mastercard from "../../assets/images/mastercard.png"
import visa from "../../assets/images/visa.png"


const Footer = () => {
  return <footer>

    <img className={s.logoImg} src={logoImg} alt="Polar Ice Cream"/>

    <div className={s.container}>

      <div className={s.firstColumn}>
        <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
        <span>Fllow Us</span>
        <div className={s.contacts}>
        <a href="/https://facebook.com"><img src={facebook} alt="Facebook"/></a>
        <a href="/https://facebook.com"><img src={twitter} alt="Twitter"/></a>
        <a href="/https://facebook.com"><img src={instagram} alt="Instagram"/></a>
        <a href="/https://facebook.com"><img src={linkedin} alt="Linked In"/></a>
        </div>
      </div>

      <nav className={s.secondColumn}>
        <button className={s.active}>Home</button>
        <button>Product</button>
        <button>Blog</button>
        <button>Pricing</button>
        <button>Testimonials</button>
        <button>Contact Us</button>
      </nav>

      <nav className={s.thirdColumn}>
        <button>Delivery Information</button>
        <button>Privacy Policy</button>
        <button>Terms & Condition</button>
        <button>Search Terms</button>
        <button>Order & Return</button>
      </nav>

      <div className={s.fourthColumn}>
        <span>Newsletter</span>

        <div className={s.inputBlock}>
          <input placeholder="Your Email"></input>
          <button>Subscribe</button>
        </div>

        <div className={s.payments}>
          <img src={paypal} alt="Paypal"/>
          <img src={mastercard} alt="Mastercard"/>
          <img src={visa} alt="Visa"/>
        </div>

      </div>

    </div>
    
  </footer>
}
export default Footer