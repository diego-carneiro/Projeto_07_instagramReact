import styled from 'styled-components';

export default function Sidebar() {

    return (
        <Side>
            <User>
                <User_icon src="assets/img/catanacomics.svg" />
                <Text>
                    <strong>catanacomics</strong>
                    Catana
                </Text>
            </User>

            <>
                <Title>
                    Sugestões para você

                </Title>

                <Suggestion>
                    <User>
                        <Suggestion_img src="assets/img/bad.vibes.memes.svg" />
                        <Text>
                            <Name>bad.vibes.memes</Name>
                            <Follows_you>Segue você</Follows_you>
                        </Text>
                    </User>
                    <Follow>Seguir</Follow>
                </Suggestion>

                <Suggestion>
                    <User>
                        <Suggestion_img src="assets/img/chibirdart.svg" />
                        <Text>
                            <Name>chibirdart</Name>
                            <Follows_you>Segue você</Follows_you>
                        </Text>
                    </User>

                    <Follow>Seguir</Follow>
                </Suggestion>

                <Suggestion>
                    <User>
                        <Suggestion_img src="assets/img/razoesparaacreditar.svg" />
                        <Text>
                            <Name>razoesparaacreditar</Name>
                            <Follows_you>Segue você</Follows_you>
                        </Text>
                    </User>

                    <Follow>Seguir</Follow>
                </Suggestion>

                <Suggestion>
                    <User>
                        <Suggestion_img src="assets/img/adorable_animals.svg" />
                        <Text>
                            <Name>adorable_animals</Name>
                            <Follows_you>Segue você</Follows_you>
                        </Text>
                    </User>

                    <Follow>Seguir</Follow>
                </Suggestion>

                <Suggestion>
                    <User>
                        <Suggestion_img src="assets/img/smallcutecats.svg" />
                        <Text>
                            <Name>smallcutecats</Name>
                            <Follows_you>Segue você</Follows_you>
                        </Text>
                    </User>

                    <Follow>Seguir</Follow>
                </Suggestion>
            </>

            <Links>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </Links>

            <Copyright>
                © 2021 INSTAGRAM DO FACEBOOK
            </Copyright>
        </Side>

    );
}
// ::::::::::Styled-Components::::::::::

const Side = styled.div`
    padding-top: 24px;
    width: 293px;
    margin-left: 40px;

    @media (max-width: 935px) {
        display: none;
    }
`;
const User = styled.div`
    display: flex;
    align-items: center;
`
const User_icon = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 28px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0 14px;
    font-size: 12px;
    font-weight: 500;
`
const Suggestion = styled.div`
    display: flex;
    justify-content: space-between;
    height: 31px;
    margin-bottom: 16px;
`
const Suggestion_img = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 28px;
`
const Links = styled.div`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 40px;
`
const Copyright = styled.div`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 18px;
`
const Follow = styled.div`
    color: #139EF2;
    font-weight: 500;
`
const Follows_you = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #8E8E8E;
    margin-top: 4px;
`
const Name = styled.div`
    font-size: 14px;
    font-weight: 500; 
`


