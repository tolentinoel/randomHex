import React, { Component } from 'react';

class FlipCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="flipCard">
                    <div className="front">
                        <h4>FRONT</h4>
                    </div>
                    <div className="back">
                        <h4>BACK</h4>
                    </div>
                </div>

            </div>
        );
    }
}

export default FlipCard;

