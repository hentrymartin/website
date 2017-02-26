import React from 'react';

class SkillGraph extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="skill-graph">
                <div className="label">{this.props.graphName}</div>
                <div className="graph-division">
                    <div className="filler" style={{width : this.props.value + '%'}}></div>
                </div>
            </div>
        );
    }
}

export default SkillGraph;
