import React from 'react';
import RangoliCircle from './RangoliCircle';
import {COLORS, TIMER} from '../constants/AppConstants';
import {getRandomArbitrary} from '../utils/utilsHelper';

class HeaderSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.height = '10px';
        this.colorIndex = 0;
        this.counter = 0;
        this.timerId = {};
        this.circles = [];
        this.coords = {
            minX : 0,
            maxX : window.innerWidth,
            minY : 0,
            maxY : window.innerHeight
        };
    }


    intializeTimeout() {

        this.timerId = setInterval(() => {

            const x = getRandomArbitrary(this.coords.minX, this.coords.maxX),
                y = getRandomArbitrary(this.coords.minY, this.coords.maxY);
            const color = COLORS[this.colorIndex];

            this.setState({
                background: color
            });
            this.colorIndex < COLORS.length - 1 ? this.colorIndex = this.colorIndex + 1  : this.colorIndex = 0;

            if (this.circles.length > 4) this.circles.splice(0, this.circles.length - 4);
            this.circles.push(<RangoliCircle  xValue={x} yValue={y} color={color} key={this.counter}/>);
            this.counter++;
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
            <div className="top-section" style={{height : this.state.height}}>
                <div className="name">Hentry Martin</div>
                <div className="designation">UI/FrontEnd Developer</div>
                {this.circles}
            </div>
        );
    }
}

export default HeaderSection;
