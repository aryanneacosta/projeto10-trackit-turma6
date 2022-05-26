import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import logo from '../img/Logo.png';


function Cadastro() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');

    function cadastrar() {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL,
            {
                email: { email },
                name: { nome },
                image: { foto },
                password: { senha }
            });
        console.log("esperando a promise")

        promise.then(response => {navigate('/')});
        promise.catch(erro => console.log(erro.response.statusText))
    }

    return (
        <Container>
            <Logo src={logo} alt='logo' />
            <Form onSubmit={cadastrar(email, senha, nome, foto)}>
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
                <input type='text'
                    placeholder="nome"
                    value={nome}
                    required
                    onChange={(event) => setNome(event.target.value)} />
                <input type='url'
                    placeholder="foto"
                    value={foto}
                    required
                    onChange={(event) => setFoto(event.target.value)} />
                <button type="submit">
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