import styled from 'styled-components';
export default function Story_box() {

    const arrayImagens = [{ img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/bmw.PNG", title: "bmw" }, { img: "assets/img/mustang.JPG", title: "mustang" }, { img: "assets/img/mclaren.PNG", title: "mclaren" }, { img: "assets/img/amg.PNG", title: "mercedes" }, { img: "assets/img/filomoderna.svg", title: "filomoderna" }, { img: "assets/img/memeriagourmet.svg", title: "memeriagourmet" }, , { img: "assets/img/barked.svg", title: "barked" }];

    return (
        <Stories>
            {arrayImagens.map(item => (
                <Story>
                    <Story_icon src={item.img}/>
                    <User>
                        {item.title}
                    </User>
                </Story>
            ))}
        </Stories>
    );
}
// ::::::::::Styled-Components::::::::::
const Stories = styled.div`
    display: flex;
    align-items: center;
    height: 118px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    padding: 0 18px;
    overflow: hidden;
    position: relative;
`;
const Story = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 14px 0;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px; 
`;
const Story_icon = styled.img`
    width: 66px;
    height: 66px;
    border-radius: 40px;
`;
const User = styled.div``;

