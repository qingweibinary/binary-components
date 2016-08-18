import React, { PureComponent, PropTypes } from 'react';
import { dateToGMTString } from 'binary-utils';

export default class Clock extends PureComponent {

    interval: number;

    static propTypes = {
        serverTimeDiff: PropTypes.number,
    };

    static defaultProps = {
        serverTimeDiff: 0,
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            time: Date.now(),
        };
    }

    componentDidMount() {
        this.interval = setInterval((): void =>
            this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount() {
		clearInterval(this.interval);
	}

    props: {
        serverTimeDiff: number,
    };

    state: {
        time: Date;
    };

    render() {
        const { time } = this.state;
        const { serverTimeDiff } = this.props;
        const adjustedTime = new Date(time + serverTimeDiff);
        const displayTimeGMT = dateToGMTString(adjustedTime);

        return (
            <div>
                <span>{displayTimeGMT} GMT</span>
                <div className="tooltip">
                    {adjustedTime.toString()}
                </div>
            </div>
        );
    }
}
