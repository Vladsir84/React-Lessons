import React, {Component} from 'react';


class Life extends Component {
    constructor(props){
        super(props)
        console.log('=> constructor');
    }
    componentDidMount() {
        console.log('=> constructor');
    }
    
    shouldComponentUpdate(nextProp, nextState) {
        console.log('=> constructor');
        // return nextProps.number
    }
    
    componentDidUpdate() {
        console.log('=> constructor');
    }
    
    componentWillUnmount() {
        console.log('=> constructor');
    }
    render() {
    return <div className="number">{this.props.number}</div>
    }
};

export default Life;