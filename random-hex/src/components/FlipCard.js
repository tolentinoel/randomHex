import React, { Component } from 'react';
import '../styles/FlipCard.css';

class FlipCard extends Component {

    handleClick = (e) => {
    let container = e.target.parentNode.parentNode.className
    if (container === "container1"  ) {
        document.querySelector('.container1').classList.toggle('flip')
        } else if (container === "container2") {
            document.querySelector('.container2').classList.toggle('flip')
        } else if (container === "flipCard") {
            e.target.parentNode.parentNode.parentNode.classList.toggle('flip')
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="container1" onClick={(e) => this.handleClick(e)}>
                    <div className="flipCard">
                        <div className="front"> <h4>FRONT</h4></div>
                        <div className="back"><img id="jester" src="https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Fairy-1024.png" alt="jester hat" width="400" /></div>
                    </div>
                </div>

                <div className="container2" onClick={(e) => this.handleClick(e)}>
                    <div className="flipCard">
                        <div className="front"> <h4>FRONT</h4></div>
                        <div className="back"><img id="jester" src="https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Knight-1024.png" alt="jester hat" width="400" /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlipCard;


