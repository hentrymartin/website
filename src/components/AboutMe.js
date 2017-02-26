import React from 'react';

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.title = 'About Me';
        this.colorIndex = 0;
        this.timerId = {};
    }

    render() {
        return (
            <div className="about-me">
                <div className="title">{this.state.title}</div>
                <div className="content">
                    I’m a 26 year old self-taught FrontEnd developer lives in Bengaluru, India. I have been working in FrontEnd Engineering for almost 4 years in various technologies like Angular JS, React JS, JQuery, JavaScript, SASS/LESS. I am currently working in SignEasy, an e-signature product company. I am responsible for writing reusable components in SignEasy.
                    Along with core product, I have also worked in writing extensions for Office 365, Zoho.
                    In my spare time, I’ll either be playing table tennis or watching any Tamil movies.
                </div>
                <div className="social-links">
                    <a className="item git-hub"><img src="../images/github.svg"/><span>GitHub</span></a>
                    <a className="item linked-in"><img src="../images/linkedin.svg"/><span>LinkedIn</span></a>
                    <a className="item mail"><img src="../images/google.svg"/><span>Mail</span></a>
                    <a className="item twitter"><img src="../images/twitter.svg"/><span>Twitter</span></a>
                </div>
                {/*<div className="social-media">*/}
                    {/*<span>*/}
                        {/*<a></a>*/}
                    {/*</span>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default AboutMe;
