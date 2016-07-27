import React, { PropTypes, PureComponent } from 'react';
import { directionClassName } from 'binary-utils';
import Direction from './Direction';
import NumberPlain from './NumberPlain';

export default class DirectionAndValue extends PureComponent {

	static propTypes = {
		diff: PropTypes.number,
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
