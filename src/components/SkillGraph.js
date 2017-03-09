import React from 'react';
import {offset} from '../utils/utilsHelper';

class SkillGraph extends React.Component {


    constructor(props) {
        super(props);
    }

    bindScrollEvent() {

      let element = this.element,
          props = this.props;

      console.log(this.props);
      document.addEventListener('scroll', function () {

        const position = offset(element),
          scrollTop = this.body.scrollTop;
        if (scrollTop > position.top - window.innerHeight) element.style.width = props.value + '%';
      });
    }

    componentDidMount() {
      this.element.style.width = 0;
      this.bindScrollEvent();

    }

    render() {
        return (
            <div className="skill-graph">
                <div className="label">{this.props.graphName}</div>
                <div className="graph-division">
                    <div className="filler" style={{width : this.props.value + '%'}}  ref={(div) => this.element = div}></div>
                </div>
            </div>
        );
    }
}

export default SkillGraph;
