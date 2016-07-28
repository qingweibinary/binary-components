import React, { PureComponent, PropTypes } from 'react';
import M from './M';

export default class OpenCloseNotice extends PureComponent {

    static propTypes = {
        isOpen: PropTypes.bool,
    }

    static defaultProps = {
        isOpen: false,
    }

    render() {
        const { isOpen } = this.props;

        return isOpen ?
            <M m="Open" className="open-notice" /> :
            <M m="Closed" className="closed-notice" />;
    }
}
