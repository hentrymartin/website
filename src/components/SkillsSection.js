import React from 'react';
import SkillGraph from './SkillGraph';


class SkillsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.skills = {};
    }

    render() {

        return (
            <div className="skills-section" ref={(skills) => this.skills = skills}>
                <div className="title">Skills</div>
                <div className="content">
                    <SkillGraph graphName="Angular JS" value="95" parentDom={this.skills}/>
                    <SkillGraph graphName="JavaScript" value="93" parentDom={this.skills}/>
                    <SkillGraph graphName="JQuery" value="85" parentDom={this.skills}/>
                    <SkillGraph graphName="React" value="70" parentDom={this.skills}/>
                    <SkillGraph graphName="HTML5" value="90" parentDom={this.skills}/>
                    <SkillGraph graphName="CSS/SASS/LESS" value="87" parentDom={this.skills}/>
                </div>
            </div>
        );
    }
}

export default SkillsSection;
