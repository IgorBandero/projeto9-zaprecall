import styled from "styled-components";

const Container = styled.div`
    width: 375px;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`

export default function Footer (props){
    return (
        <Container data-test="footer">
            <p> {props.done} / {props.total} CONCLUÍDOS </p>
        </Container>
    );
}
