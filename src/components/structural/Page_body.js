import styled from 'styled-components';
import Story_box from "../feed_components/Stories";
import Feed from "../feed_components/Feed";
import Sidebar from "../feed_components/Sidebar";

export default function Page_body() {

    return (
        <Body>
            <Content>
                <Story_box></Story_box>
                <Feed></Feed>
            </Content>
            <Sidebar></Sidebar>
        </Body>
    );
}
// ::::::::::Styled-Components::::::::::
const Body = styled.div`
    display: flex;
    justify-content: space-between;
    width: 935px;
    margin: 0 auto;
    margin-top: 88px;
`;
const Content = styled.div`
    width: 100%;
    max-width: 614px;
    display: flex;
    flex-wrap: wrap;
`;
