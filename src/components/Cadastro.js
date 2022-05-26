import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import logo from '../img/Logo.png';
import Cadastrar from "./Cadastrar";

function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');


    return (
        <Container>
            <Logo src={logo} alt='logo' />
                <Form>
                    <input type='text'
                        placeholder="email"
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)} />
                    <input type='text'
                        placeholder="senha"
                        value={senha}
                        required
                        onChange={(event) => setSenha(event.target.value)} />
                    <input type='text'
                        placeholder="nome"
                        value={nome}
                        required
                        onChange={(event) => setNome(event.target.value)} />
                    <input type='text'
                        placeholder="foto"
                        value={foto}
                        required
                        onChange={(event) => setFoto(event.target.value)} />
                    <button onClick={() => Cadastrar( email, senha, nome, foto )}>
                        Entrar
                    </button>
                </Form>
                <Link to="/">
                    <Login>
                        Já tem uma conta? Faça login!
                    </Login>
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

const Login = styled.div`
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
`



export default Cadastro;