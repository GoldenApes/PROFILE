import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span></span>
        <span>gunner</span>
      </a>
      <div>
        <p>
          This website was made with <img src={reactIcon} alt="React" />
          and
          <span>❤️</span>
        </p>
      </div>{" "}
    </Container>
  );
}
