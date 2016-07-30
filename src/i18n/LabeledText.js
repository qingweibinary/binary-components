import React, { PropTypes, PureComponent } from 'react';
import M from './M';

export default class LabeledText extends PureComponent {

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
    };

    static defaultProps = {
        value: 'N/A',
    };

    render() {
        const { id, label, value } = this.props;

        return (
            <div id={id} className={'name-val-pair'}>
                <M className={'name'} m={label} />
                <span className={'val'}>{value}</span>
            </div>
        );
    }
}
