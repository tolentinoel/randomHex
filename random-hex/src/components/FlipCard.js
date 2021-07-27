import React, { Component } from 'react';
import '../styles/FlipCard.css';

class FlipCard extends Component {
    
    handleClick = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <div className="container" onClick={(e) => this.handleClick(e)}>
                <div className="flipCard">
                    <div className="front"> <h4>FRONT</h4></div>
                    <div className="back"><img id="jester" src="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_12-1024.png" alt="jester hat" /></div>
                </div>
            </div>
        );
    }
}

export default FlipCard;


