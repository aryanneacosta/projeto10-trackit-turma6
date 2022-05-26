import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastrar( { email, senha, nome, foto }) {

    const navigate = useNavigate();
        
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL,
        {
            email: { email },
            name: { nome },
            image: { foto },
            password: { senha }
        });
    console.log("esperando a promise")
    
    promise.then(console.log("consegui"));
    promise.catch(erro => console.log(erro.response))
}

export default Cadastrar;