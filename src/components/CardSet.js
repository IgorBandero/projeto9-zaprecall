import {useState} from "react";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import wrongImage from "../assets/icone_erro.png";
import almostImage from "../assets/icone_quase.png";
import rightImage from "../assets/icone_certo.png";
import emojiRight from "../assets/party.png"
import emojiWrong from "../assets/sad.png"

const cards = [
    {question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

const Container = styled.div`
    height: 100vh;
    margin: 150px auto 180px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
`;


export default function CardSet(props){   

    const [numAnswered, setNumAnswered] = useState(0);
    const [listResults, setListResults] = useState([]);
    const [finalMessage, setFinalMessage] = useState({image: emojiRight, title: "Parabéns!", text:"Você não esqueceu de nenhum flashcard!" })
    const [final, setFinal] = useState("none");

    function addAnswered(result){
        let total = numAnswered + 1;
        let list = listResults;
        setNumAnswered(total);

        if (result === "wrong"){
            list.push({data:"no-icon", type: "wrong", image: wrongImage});
            setListResults(list);
            setFinalMessage({image: emojiWrong, title: "Putz...", text: "Ainda faltam alguns... Mas não desanime!"});
        }
        else if (result === "almost"){
            list.push({data:"partial-icon", type: "almost", image: almostImage});
            setListResults(list);
        }
        else if (result === "right"){
            list.push({data:"zap-icon", type: "right", image: rightImage});
            setListResults(list);
        }

        if (total === cards.length){   
            setFinal("flex");
        }
    }

    return (
        <> 
            <Container> 
                {cards.map((element, index) => {
                    return (<Card key={index} number={index} question={element.question} answer={element.answer} funcAddAnswered = {addAnswered} />);
                })}    
            </Container>        
            <Footer done={numAnswered} total={cards.length} resultsList={listResults} result={finalMessage} finalDisplay={final} />         
        </>
         
    )
}