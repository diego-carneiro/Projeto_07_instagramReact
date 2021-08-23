export default function Feed(props) {

    return (
        <div class="posts">
            <div class="topo">
                <div class="usuario">
                    <img src={props.data.img} />
                    {props.data.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src= {props.data.feed_img} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.data.likers_icon} />
                    <div class="texto">
                        Curtido por <strong>{props.data.likers_name}</strong> e <strong>outras {props.data.likes_number} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}