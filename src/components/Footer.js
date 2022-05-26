import styled from "styled-components";

function Footer() {
    return (
        <Bottom>
            <Habito> Hábitos </Habito>
            <Hoje> Hoje </Hoje>
            <Historico> Histórico</Historico>
        </Bottom>
    );
}

const Bottom = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.15);
`

const Habito = styled.div`
    color: #52B6FF;
    font-size: 18px;
`

const Hoje = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background-color: #52B6FF;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const Historico = styled.div`
    color: #52B6FF;
    font-size: 18px;
`

export default Footer;