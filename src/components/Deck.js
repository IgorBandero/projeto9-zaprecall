import styled from "styled-components";
import Logo from "./Logo";
import CardSet from "./CardSet"
import Footer from "./Footer";

const Container = styled.div`
  display: ${props => props.status} !important;
  width: 375px;
  height: 100%;
  background-color:  #FB6B6B;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Deck (props){

        return (
        <Container status = {props.visibility}>        
            <Logo />
            <CardSet />                   
        </Container>
    );
}