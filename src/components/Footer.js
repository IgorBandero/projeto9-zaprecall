import styled from "styled-components";
import wrongImage from "../assets/icone_erro.png";
import almostImage from "../assets/icone_quase.png";
import rightImage from "../assets/icone_certo.png";

const Container = styled.div`
    width: 375px;
    min-height: 70px;
    position: fixed;
    bottom: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);


    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-bottom: 5px;
    }

    .results img {
        margin: 0 10px 15px 0;
    }

    .total {
        margin-top: 15px;
        margin-bottom: 10px;
    }
`

const Message = styled.div`
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px 10px 0 10px;
    display: ${props => props.finalDisplay} !important;

    div {
        display: flex;
        justify-content: center;
    }

    img {
        width: 23px;
        height: 23px;
        margin-right: 10px;
    }
` 

export default function Footer (props){
    return (
        <Container data-test="footer">

            <Message data-test="finish-text" finalDisplay={props.finalDisplay} >
                <div>
                    <img src={props.result.image} />
                    <p> {props.result.title} </p>
                </div>
                <div>
                    <p> {props.result.text} </p>
                </div>
            </ Message>

            <p className="total" > {props.done} / {props.total} CONCLUÍDOS </p>
            <div className="results" > 
                {props.resultsList.map((element, index) => {
                    return (<img data-test={element.data} key={index} src={element.image} />);
                })}  
            </div>        
                
        </Container>
    );
}
