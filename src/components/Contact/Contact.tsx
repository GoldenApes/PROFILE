import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>CONTACT ME</h2>
        <p> If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:goldenapesonline@gmail.com">NFTachievements@gmail.com</a>
        </div>

        {/* <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+">()</a>
        </div> */}
        
      </div>
      <Form></Form>
    </Container>
  )
}