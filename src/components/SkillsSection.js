import React from 'react';
import SkillGraph from './SkillGraph';


class SkillsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="skills-section">
                <div className="title">Skills</div>
                <div className="content">
                    <SkillGraph graphName="Angular JS" value="95"/>
                    <SkillGraph graphName="JavaScript" value="93"/>
                    <SkillGraph graphName="JQuery" value="85"/>
                    <SkillGraph graphName="React" value="70"/>
                    <SkillGraph graphName="HTML5" value="90"/>
                    <SkillGraph graphName="CSS/SASS/LESS" value="87"/>
                </div>
            </div>
        );
    }
}

export default SkillsSection;
