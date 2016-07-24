import React, { PureComponent, PropTypes } from 'react';

export default class Clock extends PureComponent {

    static propTypes = {
        tooltip: PropTypes.string,
    };

    render() {
        const { tooltip } = this.props;

        return (
            <span>
                <img
                    className="info-icon"
                    src="img/info.svg"
                    role="presentation"
                />
                {tooltip && <div className="tooltip">{tooltip}</div>}
            </span>
        );
    }
}
