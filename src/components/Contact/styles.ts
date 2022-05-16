import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    place-items: center;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 1rem;
      background-color: none;
      border-radius: 5rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 2rem;
      }
      a{
        color: var(--white);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--green);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }
  }
  
`