export default function Story_box() {

    const arrayImagens = [{ img: "assets/img/9gag.svg", title: "9gag" }, { img: "assets/img/bmw.PNG", title: "bmw" }, { img: "assets/img/mustang.JPG", title: "mustang" }, { img: "assets/img/mclaren.PNG", title: "mclaren" }, { img: "assets/img/amg.PNG", title: "mercedes" }, { img: "assets/img/filomoderna.svg", title: "filo" }, { img: "assets/img/memeriagourmet.svg", title: "memeriagourmet" }, , { img: "assets/img/barked.svg", title: "barked" }];

    return (
      <div class="story-box">
        {arrayImagens.map(itens => (
          <div class="story-circle">
            <img class="story-img" src={itens.img} />
            <p class="story-name">{itens.title}</p>
          </div>

        ))}
      </div>
    );
}
