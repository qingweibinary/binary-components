import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';
import P from './P';

export default class Notice extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        text: PropTypes.string.isRequired,
    };

    render() {
        const { text, className } = this.props;
        if (!text) return null;
        const classes = classnames('notice-msg', className);

        return <P className={classes} text={text} />;
    }
}
