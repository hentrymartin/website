import React from 'react';

class RangoliCircle extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="circle" style={{left : this.props.xValue, top : this.props.yValue, backgroundColor : this.props.color, transform : 'scale3d(3, 3, 3)', height :'1796px', width : '1796px'}}></div>
        );
    }
}

export default RangoliCircle;
