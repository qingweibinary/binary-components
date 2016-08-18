import React, { PureComponent, PropTypes } from 'react';
import { sequence } from 'binary-utils';

export default class DobDay extends PureComponent {

	static propTypes = {
		day: PropTypes.number.isRequired,
		onDayChange: PropTypes.func,
	}

	render() {
		const { day, onDayChange } = this.props;
		const days = sequence(31);

		return (
			<select id="dobdd" name="dobdd" defaultValue={day} onChange={onDayChange}>
				<option disabled>Day</option>
				{days.map((o, i) =>
					<option key={i} value={i + 1}>{i + 1}</option>
				)}
			</select>
		);
	}
}
