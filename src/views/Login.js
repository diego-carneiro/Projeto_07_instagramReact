import styled from 'styled-components';
import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

export default function Login_Page({ setToken }) {

    const initialValue = {
        email: '',
        password: '',
    }

    const [infos, setInfos] = useState(initialValue);

    const history = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setInfos({ ...infos, [name]: value });
    }
    console.log(infos)

    function loginRequest(ev) {
        ev.preventDefault();

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, infos);
        promise.then((response) => {

            setToken(response.data.token)
            history.push('/feed')
        });
        promise.catch((error) => alert(error))
    }
    return (

        <Container>
            <Login_img src="assets/img/loginimg.PNG" />
            <Forms_box>
                <Login_box>
                    <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />

                    <Input placeholder="  Telefone, nome de usuário ou email" type="text" name="email" onChange={onChange}>
                    </Input>
                    <Input placeholder="  Senha" type="password" name="password" onChange={onChange}>
                    </Input>
                    <Button type="button" onClick={loginRequest}>Entrar
                    </Button>
                </Login_box>
                <Singup_box>
                    <Link to="/cadastro">
                        <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </Singup_box>
                <Stores_box>
                    <Get_app>
                        <p>Obtenha o aplicativo.</p>
                    </Get_app>
                    <Stores_logos>
                        <Logo src="https://logodownload.org/wp-content/uploads/2017/05/disponivel-na-app-store-botao.png" />
                        <Logo src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge-4.png" />
                    </Stores_logos>
                </Stores_box>
            </Forms_box>
        </Container>
    );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    height: 618px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    *{
        font-family: 'Lexend Deca', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
    }
    p{
        color:#52B6FF;
        line-height: 17px;
        font-size: 14px;
        text-align: center;
        margin-top: 25px;
    }
    & ::placeholder{
        color: #DBDBDB;
    }
`;
const Forms_box = styled.div`
    width: 350px;
    height: 100vh;
`;
const Login_img = styled.img`
    width: 454px;
    height: 618px;
    
    @media (max-width: 875px) {
        display: none;
    }
`;
const Logo = styled.img`
    width: 175px;
    height: 61px;
    
`;
const Login_box = styled.div`
    width: 350px;
    height: 282px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 1px;
    margin: 40px 0 10px;
    padding: 40px 0;
    background-color: #FFF;

    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Singup_box = styled.div`
    width: 350px;
    height: 63px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 1px;   
`;
const Get_app = styled.div`
    width: 350px;
    height: 18px;
    p{
        margin: 10px 20px 10px 20px;
        text-decoration: none;
        text-align: center;
        color: #262626;
    }
`;
const Stores_box = styled.div`
    width: 350px;
    height: 102px;
`;
const Stores_logos = styled.div`
    width: 350px;
    height: 44px;
    margin: 10px 0 10px 0;
`;
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 6px;
`;
const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    font-size: 21px;
    color: #FFFFFF;
`;


