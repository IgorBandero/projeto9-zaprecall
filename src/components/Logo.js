import styled from "styled-components";
import logo from "../assets/logo.png"

const Container = styled.div`
  width: 375px;
  position: fixed;
  top: 0;
  background-color:  #FB6B6B;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoElement = styled.div`
  margin: 25px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 45px;
    height: 55px;
  }

  p {
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    padding: 15px;
  } 

`;

export default function Logo(){
    return (
        <Container>
            <LogoElement> 
                <img src={logo} /> 
                <p>ZapRecall</p>
            </LogoElement>             
        </Container>        
    )
}