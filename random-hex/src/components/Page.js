import React, { Component } from 'react';
import '../styles/Page.css';


class Page extends Component {

    render() {

        const links = [
            { id: 1,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Spell_Book-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 2,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Sword-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 3,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Item_Bag-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 4,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Bow_Arrow-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 5,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Crystal_Shard-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 6,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 7,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Castle-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 8,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Villager-256.png",
            alt: "Fantasy icon from iconfinder"
            }

        ]


        return (
            <div className="gallery">
                {links.map(pic => <img className="galleryPic" src={pic.url} alt={pic.alt} key={links.indexOf(pic)} />)}
            </div>
        );
    }
}

export default Page;
