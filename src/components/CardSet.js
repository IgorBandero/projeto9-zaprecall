import styled from "styled-components";
import Card from "./Card";

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
    margin: 45px auto 70px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
`;

export default function CardSet(props){   

    return (
        <Container> 

            {cards.map((element, index) => {
                return (<Card key={index} number={index} question={element.question} answer={element.answer} />);
            })}
                
        </Container>             
    )
}