import React from 'react';
import {COLORS, TIMER} from '../constants/AppConstants';

class HeaderSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.height = '10px';
        this.colorIndex = 0;
        this.timerId = {};
    }


    intializeTimeout() {

        this.timerId = setInterval(() => {

            const color = COLORS[this.colorIndex];
            this.setState({
                background: color
            });
            this.colorIndex < COLORS.length - 1 ? this.colorIndex = this.colorIndex + 1  : this.colorIndex = 0 ;
        }, TIMER);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    componentDidMount() {
        this.setState({
            height : window.innerHeight + 'px',
            background : COLORS[this.colorIndex]
        });

        this.colorIndex++;

        this.intializeTimeout();
    }

    render() {
        return (
            <div className="top-section" style={{height : this.state.height, backgroundColor : this.state.background}}>
                <div className="name">Hentry Martin</div>
                <div className="designation">UI/FrontEnd Developer</div>
            </div>
        );
    }
}

export default HeaderSection;
