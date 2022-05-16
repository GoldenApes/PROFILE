import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    margin-top: -2%;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-left: 10%;
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  
  }

  .hero-image{
    img{
      max-width:1000px;
      margin-left: -15%;
      
    }
  }
  
  .social-media {
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 4rem;
      width: 4rem;
      animation: spinning 15s infinite linear;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }
`;
