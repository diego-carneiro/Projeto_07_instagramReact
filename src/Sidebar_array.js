import Sidebar from "./Sidebar";
export default function Sidebar_array() {

    const arraySidebar = [{img: "assets/img/bad.vibes.memes.svg", username: "bad.vibes.memes"},{img: "assets/img/bad.vibes.memes.svg", username: "bad.vibes.memes"}
    ];

    return (
        <div class="usuario">
            {arraySidebar.map(item => (
                <Sidebar data={item}></Sidebar>
            ))}
            
        </div>

    );

}
