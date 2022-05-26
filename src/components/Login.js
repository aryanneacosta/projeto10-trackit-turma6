import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import logo from '../img/Logo.png';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function fazerLogin( email, senha ) {
        console.log("oie");
    }

    return (
        <Container>
            <Logo src={logo} alt='logo' />
            <Form>
                <input type='email'
                    placeholder="email"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)} />
                <input type='password'
                    placeholder="senha"
                    value={senha}
                    required
                    onChange={(event) => setSenha(event.target.value)} />
                <button onClick={() => fazerLogin( email, senha )}>
                    Entrar
                </button>
            </Form>
            <Link to="/cadastro">
                <Cadastro>
                    Não tem uma conta? Cadastre-se!
                </Cadastro>
            </Link>
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

const Form = styled.form`
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