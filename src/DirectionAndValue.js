import React, { PropTypes, Component } from 'react';
import directionClassName from 'binary-utils/lib/directionClassName';
import Direction from './Direction';
import NumberPlain from './NumberPlain';

export default class DirectionAndValue extends Component {

	static propTypes = {
		diff: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	render() {
		const { diff, value } = this.props;
		return (
			<span>
				<Direction diff={diff} />
				<NumberPlain className={directionClassName(diff)} value={value} />
			</span>
		);
	}
}
