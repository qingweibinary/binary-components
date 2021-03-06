import React, { PropTypes, Component } from 'react';
import NumberPlain from './NumberPlain';
import NumberColored from './NumberColored';
import M from './M';

export default class LabeledNumber extends Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.number,
        currency: PropTypes.any,
        isProfit: PropTypes.func,
    };

    render() {
        const { id, label, isProfit } = this.props;

        return (
            <div id={id} className={'name-val-pair'}>
                <M className={'name'} id={label + ':'} m={label + ':'} />
                {
                    isProfit ?
                        <NumberColored {...this.props} /> :
                        <NumberPlain {...this.props} />
                }
            </div>
        );
    }
}
