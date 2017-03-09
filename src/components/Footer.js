import React from 'react';

class Footer extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div>Designed and Developed by Hentry</div>
                <div>Developed using React and deployed in AWS</div>
            </div>

        );
    }
}

export default Footer;
