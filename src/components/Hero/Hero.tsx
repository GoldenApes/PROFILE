import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";
import twitterIcon from "../../assets/twitter.png";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>HELLO, WELCOME</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>ANDY GUNNER</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>NFT-WEB 3 DEV FULL-STACK</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Marine Vet :: Photographer :: Graphic Design UX/UI :: Motivational
            Speaker
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
          <div className="social-media">
          <a
              href="https://twitter.com/Andyverses"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="Twiiter" />
            </a>
            <a
              href="https://www.linkedin.com/m/in/team-ag"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="Linkedin" />
            </a>

            <a
              href="https://github.com/Team-AG"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>

            <a
              href="https://www.instagram.com/nftachievements/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a
              href="https://discord.gg/Su8cq8hN"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discordIcon} alt="Discord" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
