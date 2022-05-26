import styled from "styled-components";


function Container() {
    return (
        <Content>
            <Top>
                <Titulo>Meus hábitos</Titulo>
                <Button> + </Button>
            </Top>
            <Text>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Text>
            
        </Content>
    );
}

const Content = styled.div`
    height: 100vh;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 70px;
    background-color: #E5E5E5;
    position: absolute;
    box-sizing: border-box;
    z-index: 0;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between; 
`

const Titulo = styled.div`
    margin-left: 18px;
    font-size: 22px;
    color: #126BA5;
    margin-top: 28px;
`

const Button = styled.button`
    height: 35px;
    width: 40px;
    margin-right: 18px;
    border-radius: 5px;
    border: 1px solid #52B6FF;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 27px;
    margin-top: 22px;
`

const Text = styled.div`
    color: #666666;
    font-size: 18px;
    margin-left: 18px;
    margin-top: 28px;
`

export default Container;