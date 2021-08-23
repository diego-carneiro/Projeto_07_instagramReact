import Feed from "./Feed";
export default function ConteudoFeed() {

    const arrayFeed = [{img: "assets/img/meowed.svg", username: "meowed", feed_img: "assets/img/gato-telefone.svg", likers_icon: "assets/img/respondeai.svg", likers_name: "respondeai", likes_number: "101.523"}, {img: "assets/img/barked.svg", username: "barked", feed_img: "assets/img/dog.svg", likers_icon: "assets/img/adorable_animals.svg", likers_name: "adorable_animals", likes_number: "99.159 "

    } 
    ];

    return (
        <div class="post">
            {arrayFeed.map(item => (
                <Feed data={item}></Feed>
            ))}
            
        </div>

    );

}
