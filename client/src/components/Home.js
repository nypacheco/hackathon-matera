import React from 'react';
import Presentation from './Presentation';
import Section from './Section';

class Home extends React.Component{
    render() {
        return (
            <div>
                <Presentation />
                <Section />
            </div>
        )
    }
};

export default Home;