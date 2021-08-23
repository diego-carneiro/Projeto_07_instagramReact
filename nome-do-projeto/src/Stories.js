import Story from "./Story";
export default function ConteudoStories() {

    const arrayImagens = [{ img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/barked.svg", title: "barked" }, { img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/barked.svg", title: "barked" }, { img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/9gag.svg", title: "9gag" }
    ];

    return (
        <div class="stories">
            {arrayImagens.map(item => (
                <Story data={item}></Story>
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );

}



