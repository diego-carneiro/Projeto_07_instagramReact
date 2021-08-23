import TopoPagina from "./TopoPagina";
import Stories from "./Stories";
import Feed_array from "./Feed_array";
import Sidebar from "./Sidebar";

export default function App(){

    return (
        <div>
            <TopoPagina />
            <div class="corpo">
                <div class="esquerda">
                <Stories />
                <Feed_array />
            </div>
            <Sidebar />
            </div>
        
        </div>
    );
}