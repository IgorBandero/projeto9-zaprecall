import styled from "styled-components";
import logo from "../assets/logo.png";

const Container = styled.div`
    display: ${props => props.status} !important;
    width: 375px;
    height: 100vh;
    background-color:  #FB6B6B;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Content = styled.div`
    background-color:  #FB6B6B;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;

    img {
        width: 135px;
        height: 160px;
    }

    p {
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        padding: 25px;
    }

    button {
        width: 245px;
        height: 54px;
        margin-top: 5px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive', sans-serif;;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
        cursor: pointer;
    }

`


export default function WelcomeScreen(props){
    return (
        <Container status = {props.visibility} >
            <Content>
                <img src={logo} />
                <p> ZapRecall </p>
                <button data-test="start-btn" onClick={props.startFunction}> Iniciar Recall! </button>
            </Content>            
        </Container>
    )
}