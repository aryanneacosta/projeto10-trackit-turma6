import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/Logo.png';

function Login() {
    return (
        <Container>
            <Logo src={logo} alt='logo' />
            <Form>
                <input type='text'
                    placeholder="email" />
                <input type='text'
                    placeholder="senha" />
                <button>
                    Entrar
                </button>
                <Link to="/cadastro">
                    <Cadastro>
                        Não tem uma conta? Cadastre-se!
                    </Cadastro>
                </Link>

            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    height: 180px;
    width: 180px;
    margin-top: 70px;
    margin-bottom: 32px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        height: 45px;
        width: 302px;
        margin-bottom: 6px;
        color: #DBDBDB;
        font-size: 20px;
    }


    button {
        border: 1px solid #52B6FF;
        border-radius: 5px;
        height: 45px;
        width: 310px;
        margin-bottom: 25px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 20px;
    }
`

const Cadastro = styled.div`
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
`



export default Login;