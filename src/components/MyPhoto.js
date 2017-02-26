import React from 'react';

class MyPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="my-photo">
                <img className="blur" src="../images/my-photo.jpg"/>
                <img className="image-to-show" src="../images/my-photo.jpg"/>
            </div>
        );
    }
}

export default MyPhoto;
