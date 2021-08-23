export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.data.img} />
            </div>
            <div class="usuario">
                {props.data.title}
            </div>
        </div>
    )
}