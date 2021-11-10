import styled from 'styled-components';
import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

export default function Signup_page() {

    const initialValue = {
        email: '',
        name: '',
        image: '',
        password: '',
    }
    const [infos, setInfos] = useState(initialValue);
    const history = useHistory();

    console.log(infos);

    function onChange(ev) {
        const { name, value } = ev.target;

        setInfos({ ...infos, [name]: value });
    }
    function onSubmit(ev) {
        ev.preventDefault();

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, infos);
        promise.then((response) => {
            history.push('/')
            console.log(response)
        });
        promise.catch((error) => alert(error))
    }

    return (

        <Container>
            <Singup_body>
                <Infos_box>
                    <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
                    <Input placeholder="  Email" type="text" name="email" id="email" onChange={onChange}>
                    </Input>
                    <Input placeholder="  Senha" type="text" name="password" id="passwordInput" onChange={onChange}>
                    </Input>
                    <Input placeholder="  Nome" type="text" name="name" id="nameInput" onChange={onChange}>
                    </Input>
                    <Input placeholder="  Foto de perfil" type="text" name="image" id="imgInput" onChange={onChange}>
                    </Input>
                    <Button type="button" onClick={onSubmit}>Cadastrar
                    </Button>
                    <Link to="/">
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </Infos_box>
                <Stores_box>
                    <Get_app>
                        <p>Obtenha o aplicativo.</p>
                    </Get_app>
                    <Stores_logos>
                        <Logo src="https://logodownload.org/wp-content/uploads/2017/05/disponivel-na-app-store-botao.png" />
                        <Logo src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge-4.png" />
                    </Stores_logos>
                </Stores_box>
            </Singup_body>
        </Container>
    );
}

// ::::::::::Styled-Components::::::::::

const Container = styled.div`
    width: 100vw;
    height: 420px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    *{
        font-family: 'Lexend Deca', sans-serif;
    }
    p{
        color:#52B6FF;
        text-decoration-line: underline;
        line-height: 17px;
        font-size: 14px;
        text-align: center;
        margin-top: 25px;
    }
    & ::placeholder{
        color: #DBDBDB;
    }
`;
const Singup_body = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Infos_box = styled.div`
    width: 400px;
    height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img`
    width: 168px;
    height: 60px;
`;
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
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

