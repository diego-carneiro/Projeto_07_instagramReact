import styled from 'styled-components';
export default function Feed() {

    const arrayFeed = [{ img: "assets/img/meowed.svg", username: "meowed", feed_img: "assets/img/gato-telefone.svg", likers_icon: "assets/img/respondeai.svg", likers_name: "respondeai", likes_number: "101.523" }, {
        img: "assets/img/barked.svg", username: "barked", feed_img: "assets/img/dog.svg", likers_icon: "assets/img/adorable_animals.svg", likers_name: "adorable_animals", likes_number: "99.159 "
    }];

    return (
        <Posts>
            {arrayFeed.map(item => (
                <Post>
                    <Post_header>
                        <User>
                            <User_icon src={item.img} />
                            {item.username}
                        </User>
                        <Actions>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </Actions>
                    </Post_header>
                    <Content>
                        <Post_img src={item.feed_img} />
                    </Content>
                   
                        <Footer>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                        </Footer>
                        <Likes_info>
                            <Like_icon src={item.likers_icon} />
                            <Text>
                                Curtido por <strong>{item.likers_name}</strong> e <strong>outras {item.likes_number} pessoas</strong>
                            </Text>
                        </Likes_info>
                    
                </Post>
            ))}
        </Posts>
    );
}
// ::::::::::Styled-Components::::::::::
const Posts = styled.div`
`;
const Post = styled.div`
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
`;
const User = styled.div`
    display: flex;
    align-items: center;
`;
const User_icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 10px;
`;
const Post_header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
`;
const Post_img = styled.img`
    width: 100%;
`;
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 24px;
`
const Footer = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 24px;
`
const Likes_info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const Like_icon = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 12px;
    margin-right: 5px;
    border-radius: 28px;
`
const Text = styled.div` 
`
const Content = styled.div`
`;
