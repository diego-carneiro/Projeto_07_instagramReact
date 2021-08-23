import TopoPagina from "./TopoPagina";
import Stories from "./Stories";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function App(){

    return (
        <div>
            <TopoPagina />
            <div class="corpo">
                <div class="esquerda">
                <Stories />
                <Feed />
            </div>
            <Sidebar />
            </div>
        
        </div>
    );
}