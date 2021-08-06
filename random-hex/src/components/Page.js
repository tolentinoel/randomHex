import React, { Component } from 'react';
import '../styles/Page.css';
import { Tabs, Tab } from 'react-bootstrap';


class Page extends Component {

    state = {
        tabKey: "1",
        picArray: []
    }


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
            },
            { id: 9,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Werewolf-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 10,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Grim_Reaper-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 11,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Elf-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 12,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Destructive_Magic-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 13,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Unicorn-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 14,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Spell_Scroll-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 15,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Centaur-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 16,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Sorceress-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 17,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Helmet.jpg-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 18,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/King-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 19,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Orc-256.png",
            alt: "Fantasy icon from iconfinder"
            },
            { id: 20,
            url: "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Adventure_Map-256.png",
            alt: "Fantasy icon from iconfinder"
            }

        ]


        const mappingHiRes = () => {
            let i = 1
            let images = []
            while (i < 23){
                let num = `/hiRes/${i}.JPG`
                images.push(num)
                i++;
            }
            return images
        }



        const sliceArray = (tab) => {


            switch (tab) {
               case "3" :
                    return (
                        mappingHiRes().slice(0, mappingHiRes().length/2).map(path => <img className="boatPics" src={process.env.PUBLIC_URL + path} alt="photos from boat trip" key={path} width="275" height="206"/>)
                    );
                case "4" :
                    return (
                        mappingHiRes().slice(mappingHiRes().length/2, mappingHiRes().length).map(path => <img className="boatPics" src={process.env.PUBLIC_URL + path} alt="photos from boat trip" key={path} width="275" height="206"/>)
                    )

                default:
                    return(
                        <h2>LOADING..</h2>
                    )

            }
        }



        return (
            <>
                 <div id="gallery">

                    <Tabs
                    className="justify-content-center"
                    activeKey={this.state.tabKey}
                    onSelect={(k) => this.setState({tabKey: k})}
                    >
                        <Tab eventKey="1" title="1" className="photoTabs">
                            <h1>1</h1>
                            {links.slice(0, links.length/2).map(pic => <img className="galleryPics" src={pic.url} alt={pic.alt} key={links.indexOf(pic)} />)}
                        </Tab>
                        <Tab eventKey="2" title="2" className="photoTabs">
                            <h1>2</h1>
                            {links.slice(links.length/2, links.length).map(pic => <img className="galleryPics" src={pic.url} alt={pic.alt} key={links.indexOf(pic)} />)}
                        </Tab>
                        <Tab eventKey="3" title="3" className="photoTabs">
                            <h1>3</h1>

                            {sliceArray(this.state.tabKey)}
                        </Tab>
                        <Tab eventKey="4" title="4" className="photoTabs">
                            <h1>4</h1>

                            {sliceArray(this.state.tabKey)}
                        </Tab>

                    </Tabs>
                </div>

            </>
        );
    }
}

export default Page;
