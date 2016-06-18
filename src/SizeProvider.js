import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SizeProvider extends Component {

    static propTypes = {
        children: React.PropTypes.object,
        style: React.PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        const { height, width } = props.style;
        this.state = {
            height,
            width,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize, true);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, true);
    }

    onResize = () => {
        const targetDOM = ReactDOM.findDOMNode(this);
        this.setState({ height: targetDOM.clientHeight, width: targetDOM.clientWidth });
    }

    render() {
        const { children } = this.props;
        const { height, width } = this.state;
        return (
            <div>
                {React.Children.map(children, child =>
                    React.cloneElement(child, { style: { height, width } })
                )}
            </div>
        );
    }
}
