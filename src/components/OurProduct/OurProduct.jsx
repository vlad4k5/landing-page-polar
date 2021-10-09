import s from "./OurProduct.module.scss"
import greenIcecreamImg from "../../assets/images/greenIcecream.png"
import yellowIcecreamImg from "../../assets/images/yellowIcecream.png"
import brownIcecreamImg from "../../assets/images/brownIcecream.png"
import threeIcecreams from "../../assets/images/threeIcecreams.png"
import maleImg from "../../assets/images/maleAvatar.jpg"
import femaleImg from "../../assets/images/femaleAvatar.jpg"
import femaleImg2 from "../../assets/images/femaleAvatar2.jpg"
import leftQuote from "../../assets/images/leftQuote.svg"
import rightQuote from "../../assets/images/rightQuote.svg"
import leftArrow from "../../assets/images/leftArrow.svg"
import rightArrow from "../../assets/images/rightArrow.svg"



const OurProduct = () => {
  return <div>

    <div className={s.topSide}>
      <h2>Our Product</h2>
      <nav>
        <button className={s.active}>ICE CREAM</button>
        <button>CAYENNE CHOCOLATE</button>
        <button>CAKE BATTER</button>
        <button>CANDY CANE</button>
        <button>PLATTERS</button>
        <button>DESSERT</button>
      </nav>
    </div>
    

    <div className={s.contnent}>

      <img src={greenIcecreamImg} alt="Brown bread"/>
      <div className={s.infoBlock}>
        <h3>Brown bread</h3>
        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
        <div>$19.55 <span>$22.55</span></div>
        <button>Buy Now</button>
      </div>

      <div className={`${s.infoBlock} ${s.reversedInfoBlock}`}>
        <h3>Cayenne chocolate</h3>
        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
        <div>$19.55 <span>$22.55</span></div>
        <button>Buy Now</button>
      </div>
      <img src={yellowIcecreamImg} alt="Cayenne chocolate"/>

      <img src={brownIcecreamImg} alt="Sweet corn"/>
      <div className={s.infoBlock}>
        <h3>Sweet corn</h3>
        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
        <div>$19.55 <span>$22.55</span></div>
        <button>Buy Now</button>
      </div>

    </div>


    <div className={s.bottomSide}>
      <div className={s.infoBlock}>

        <div className={s.personInfo}>
          <img src={femaleImg} alt="Avatar"/> 
          <div className={s.nameCountryInfo}>
            <div className={s.name}>Adele A. McNeill</div>
            <div className={s.country}>AMIRICAN</div>
          </div>
        </div>

        <div className={s.quoteBlock}>
          <div className={s.leftQuotes}>
            <img src={leftQuote} alt="Quote"/>
            <img src={leftQuote} alt="Quote"/>
          </div>
          <p>Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
          <div className={s.rightQuotes}>
            <img src={rightQuote} alt="Quote"/>
            <img src={rightQuote} alt="Quote"/>
          </div>
        </div>

        <div className={s.slider}>
          <img src={leftArrow} className={s.inactive} alt="Left" />
          <img src={maleImg} className={s.photo} />
          <img src={femaleImg} className={`${s.photo} ${s.activePhoto}`} />
          <img src={femaleImg2} className={s.photo} />
          <img src={rightArrow} alt="Right" />
        </div>

      </div>

      <img src={threeIcecreams} alt="Ice cream"/>

    </div>

  </div>
}
export default OurProduct