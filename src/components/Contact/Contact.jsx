import s from "./Contact.module.scss"


const Contact = () => {
  return <div className={s.contact}>
    <h2>Have Question in Mind? Let us help you</h2>

    <input placeholder="Enter your question"></input>
    <button>Send</button>
  </div>
}
export default Contact