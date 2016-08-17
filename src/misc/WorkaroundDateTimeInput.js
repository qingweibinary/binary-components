import React, { PropTypes, PureComponent } from 'react';

// this component is to workaround react bug with chrome rendering engine
// https://github.com/facebook/react/issues/7233
// TODO: once 15.3.1 is release this workaround should be removed

export default class WorkaroundDateTimeInput extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(['time', 'date']),
        id: PropTypes.string.isRequired,
        min: PropTypes.string,
        max: PropTypes.string,
        onChange: PropTypes.func,
        defaultValue: PropTypes.any.isRequired,
        maxLength: PropTypes.number,
    };

    componentDidMount() {
        const { id } = this.props;
        const ele = this.refs[id];
        ele.value = "";
        ele.value = this.props.defaultValue;
    }

    render() {
        return (
            <input {...this.props} ref={this.props.id} />
        );
    }
}
