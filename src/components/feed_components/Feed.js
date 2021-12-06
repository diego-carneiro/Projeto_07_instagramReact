export default function Feed() {

    const arrayFeed = [{ img: "assets/img/meowed.svg", username: "meowed", feed_img: "assets/img/gato-telefone.svg", likers_icon: "assets/img/respondeai.svg", likers_name: "respondeai", likes_number: "101.523" }, {
        img: "assets/img/barked.svg", username: "barked", feed_img: "assets/img/dog.svg", likers_icon: "assets/img/adorable_animals.svg", likers_name: "adorable_animals", likes_number: "99.159 "
    }];

    return (
        <>
            {arrayFeed.map(itens => (
                <div class="post-box">
                    <div class="topo-post">
                        <div class="usuario"><img class="user-photo" src={itens.img} />
                            <p class="post-user">{itens.username}</p>
                        </div>
                        <ion-icon name="ellipsis-horizontal-outline" id="post-options"></ion-icon>
                    </div>
                    <img class="feed-picture" src={itens.feed_img} />
                    <div class="rodape-post">
                        <div class="icon-bar">
                            <div>
                                <ion-icon class="icone-topo" name="heart-outline"></ion-icon>
                                <ion-icon class="icone-topo" name="chatbubble-outline"></ion-icon>
                                <ion-icon class="icone-topo" name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon class="icone-topo" name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="post-insights">
                            <img class="porsche-logo like-icon" src={itens.likers_icon} />
                            <p class="insights-text">Curtido por <strong>{itens.likers_name}</strong> e <strong> outras 101.523 pessoas</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
