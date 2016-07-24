import React, { PureComponent, PropTypes } from 'react';
import NumberPlain from './NumberPlain';
import NumberColored from './NumberColored';

export default class Number extends PureComponent {
    static propTypes = {
        value: PropTypes.any,
        currency: PropTypes.any,
        isProfit: PropTypes.func,
    };

    render() {
        const { isProfit } = this.props;
        return (
            isProfit ?
                <NumberColored {...this.props} /> :
                <NumberPlain {...this.props} />
        );
    }
}
