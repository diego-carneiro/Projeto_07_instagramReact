import TopoPagina from "./TopoPagina";
import Stories from "./Stories";
import Feed_array from "./Feed_array";
import Sidebar_array from "./Sidebar_array";

export default function App() {

    return (
        <div>
            <TopoPagina />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Feed_array />
                </div>
                <Sidebar_array />
            </div>

        </div>
    );
}