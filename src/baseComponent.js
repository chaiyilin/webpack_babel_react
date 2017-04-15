import React, {Component} from 'react';
import './HelloWorld.css';

class BaseComponent extends Component {
    //http://cheng.logdown.com/posts/2016/03/26/683329
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br/>
                <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
                <br/>
                <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
            </div>
        );
    }
}

export default HelloWorld;