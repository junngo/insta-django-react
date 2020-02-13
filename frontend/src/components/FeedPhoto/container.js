import React, { Component } from "react";
import FeedPhoto from "./presenter";

class Container extends Component {
    state = {
        seeingLikes: false
    };

    render() {
        return (
            <FeedPhoto
                {...this.props}
                {...this.state}
                openLikes={this._openLikes}
                closeLikes={this._closeLikes}
            />
        );
    }

    _openLikes = () => {
        console.log('check open like');
        this.setState({
            seeingLikes: true
        });
    };

    _closeLikes = () => {
        console.log('check close likt');
        this.setState({
            seeingLikes: false
        });
    };
}

export default Container;
