import React from 'react';
import NavigationBar from './NavigationBar';

require('./../../stylesheet/main.scss');

class App extends React.Component {
    render(){
        return (
            <div>
                <NavigationBar />
                {this.props.children}
            </div>
        )
    };
};

export default App;