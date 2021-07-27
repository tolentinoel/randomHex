import React, { Component } from 'react';

class FlipCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="flipCard">
                    <div className="front"> <h4>FRONT</h4></div>
                    <div className="back"><img src="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_12-1024.png" alt="jester hat" /></div>
                </div>

            </div>
        );
    }
}

export default FlipCard;


