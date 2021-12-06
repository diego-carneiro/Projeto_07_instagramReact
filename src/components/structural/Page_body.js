import Story_box from "../feed_components/Stories";
import Feed from "../feed_components/Feed";
import Sidebar from "../feed_components/Sidebar";
import Header from "./Header";

export default function Page_body() {

    return (
        
        <div class="corpo-pagina">
            <Header></Header>
            <div class="story-feed">
                <Story_box></Story_box> 
                <Feed></Feed>
            </div>
            <Sidebar></Sidebar>
        </div>
    );
}

