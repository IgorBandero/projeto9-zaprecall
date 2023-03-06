import styled from "styled-components";
import wrongImage from "../assets/icone_erro.png";
import almostImage from "../assets/icone_quase.png";
import rightImage from "../assets/icone_certo.png";

const Container = styled.div`
    width: 375px;
    height: 70px;
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
        margin-right: 5px;
    }
`

export default function Footer (props){
    return (
        <Container data-test="footer">
            <p> {props.done} / {props.total} CONCLUÍDOS </p>
            <div className="results" > 
                {props.resultsList.map((element, index) => {
                    return (<img key={index} src={element.image} />);
                })}  
            </div>            
        </Container>
    );
}
