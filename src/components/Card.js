import styled from "styled-components";
import { useState } from "react";
import seta from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png";
import wrongImage from "../assets/icone_erro.png";
import almostImage from "../assets/icone_quase.png";
import rightImage from "../assets/icone_certo.png";

const Flashcard = styled.div`
    width: 300px;
    min-height: ${props => props.type.height};
    background: ${props => props.type.background};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    font-family: 'Recursive'; 

    img {
        cursor: pointer;
    }

`
const ClosedCard = styled.div`

    width: 300px;
    display: ${props => props.visibility} !important;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;

    p { 
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.type.color};
        text-decoration-line: ${props => props.type.decoration};
    }

    img {
        width: 20px;
        height: 23px;  
    }
`

const OpendCard = styled.div`

    width: 300px;
    display: ${props => props.visibility} !important;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 5px;
 
    .question {
        width: 100%;
    }

    .question p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }

    .button {
        width: 100%;
        display: flex;
        justify-content: end;
    }
`

const TurnedCard = styled.div`
    width: 300px;
    display: ${props => props.visibility} !important;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    border-radius: 5px;

    .answer p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color: white;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        border: none;
        cursor: pointer;
    }

    .wrong {        
        background: #FF3030;
    }

    .almost {
        background: #FF922E;
    }

    .right {
        background: #2FBE34;
    }
`

export default function Card (props){

    const [typeCard, setTypeCard] = useState({name: "initial", height: "65px", background: "#FFFFFF"});
    const [closedCardVisibility, setClosedCardVisibility] = useState("flex");
    const [statusQuestion, setStatusQuestion] = useState({color: "#333333", decoration: "none"})
    const [openCardVisibility, setOpenCardVisibility] = useState("none");
    const [turnedCardVisibility, setTurnedCardVisibility] = useState("none");
    const [image, setImage] = useState(seta);


    function openCard(){
        setTypeCard({name: "question", height: "130px", background: "#FFFFD4"});
        setImage(turn);
        setClosedCardVisibility("none");
        setOpenCardVisibility("flex");
    }

    function answerCard(){
        setOpenCardVisibility("none");
        setTurnedCardVisibility("flex");
    }

    function resultAnswer(answer){
        if (answer === "wrong"){
            setImage(wrongImage);
            setStatusQuestion({color: "#FF3030", decoration: "line-through"});
        }
        else if (answer === "almost"){
            setImage(almostImage);
            setStatusQuestion({color: "#FF922E", decoration: "line-through"});
        }
        else if (answer === "right"){
            setImage(rightImage);
            setStatusQuestion({color: "#2FBE34", decoration: "line-through"});
        }
        setTypeCard({name: "initial", height: "65px", background: "#FFFFFF"});
        setTurnedCardVisibility("none");
        setClosedCardVisibility("flex");
    }


    return (
        
        <Flashcard data-test="flashcard" type = {typeCard}> 

            <ClosedCard visibility = {closedCardVisibility} type = {statusQuestion}>
                <p data-test="flashcard-text"> Pergunta {props.number} </p>     
                <img data-test="play-btn" onClick={openCard} src={image} /> 
            </ClosedCard>

            <OpendCard visibility= {openCardVisibility}>
                <div className="question" >
                    <p data-test="flashcard-text"> {props.question} </p>
                </div>
                <div className="button"> 
                    <img data-test="turn-btn" onClick={answerCard} src={image} />
                </div>
            </OpendCard>           

            <TurnedCard visibility={turnedCardVisibility} >
                <div className="answer" >
                    <p data-test="flashcard-text"> {props.answer} </p>
                </div>
                <div className="buttons">
                    <button data-test="no-btn" className="wrong" onClick={() => resultAnswer("wrong")} > Não lembrei </button>
                    <button data-test="partial-btn" className="almost" onClick={() => resultAnswer("almost")} > Quase não lembrei </button>
                    <button data-test="zap-btn" className="right" onClick={() => resultAnswer("right")} > Zap! </button>
                </div>
            </TurnedCard>   

        </Flashcard>
        
    );
};