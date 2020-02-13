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
        const { getPhotoLikes } = this.props
        this.setState({
            seeingLikes: true
        });
        getPhotoLikes();
    };

    _closeLikes = () => {
        console.log('check close likt');
        this.setState({
            seeingLikes: false
        });
    };
}

export default Container;
