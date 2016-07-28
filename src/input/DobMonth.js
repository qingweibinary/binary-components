import React, { PureComponent, PropTypes } from 'react';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export default class DobMonth extends PureComponent {

	static propTypes = {
		month: PropTypes.number,
		onMonthChange: PropTypes.func,
	};

	render() {
		const { month, onMonthChange } = this.props;

		return (
			<select id="dobmm" name="dobmm" defaultValue={month} onChange={onMonthChange}>
				<option disabled>Month</option>
				{MONTHS.map((o, i) =>
					<option key={i} value={i}>{o}</option>
				)}
			</select>
		);
	}
}
