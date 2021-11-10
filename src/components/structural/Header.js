import styled from 'styled-components';

export default function Header() {

  return (
    <Navbar>
      <Container>
        <Logo>
          <ion-icon name="logo-instagram"></ion-icon>
          <Separador></Separador>
          <img src="assets/img/logo.png" />
        </Logo>

        <Input type="text" placeholder="Pesquisar" />

        <Icones>
          <ion-icon name="home"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="add"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </Icones>

      </Container>
    </Navbar>
  );
}
// ::::::::::Styled-Components::::::::::
const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 54px;
    border-bottom: 1px solid #DBDBDB;
    font-size: 22px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-sizing: border-box;
`;
const Container = styled.div`
width: 100%;
    max-width: 935px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const Separador = styled.div`
    width: 1px;
    height: 22px;
    background-color: #DBDBDB;
    margin: 0 10px;
`;
const Input = styled.input`
    width: 215px;
    height: 28px;
    border-radius: 3px;
    background-color: #FAFAFA;
    border: 1px solid #DBDBDB;
    color: #979797;
    text-align: center;
`;
const Icones = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    width: 192px;
    height: 53px;
    justify-content: space-between;
`;


