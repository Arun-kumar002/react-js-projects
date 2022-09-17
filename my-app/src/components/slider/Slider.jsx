import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div>
                <img src={this.props.photo} alt="" srcset="" />
            </div>
        );
    }
}

export default Slider;
