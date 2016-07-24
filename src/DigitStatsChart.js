import React, { PureComponent, PropTypes } from 'react';
import arrayMin from 'binary-utils/lib/arrayMin';
import arrayMax from 'binary-utils/lib/arrayMax';

export default class DigitStatsChart extends PureComponent {

	static propTypes = {
		orientation: PropTypes.string,
		stats: PropTypes.arrayOf(PropTypes.number).isRequired,
	};

	static defaultProps = {
		orientation: 'horizontal',
		stats: [],
	};

	render() {
		const { stats, orientation } = this.props;
		const min = arrayMin(stats);
		const max = arrayMax(stats);

		return (
			<div className={'digit-stats-chart ' + orientation}>
				{stats.map((x, i) =>
					<div key={i} className="digit-stats-col">
						<div
							className="digit-stats-percentage"
						>
							{x.toFixed(2)}%
						</div>
						<div
							className={'digit-stats-bar'
								+ (x === max ? ' max' : '')
								+ (x === min ? ' min' : '')}
							style={{ transform: `scale(${x / max}, 1)` }}
						/>
						<div className="digit-stats-digit">{i}</div>
					</div>
				)}
			</div>
		);
	}
}
