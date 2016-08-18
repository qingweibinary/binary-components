import React, { PureComponent, PropTypes } from 'react';
import { sequence } from 'binary-utils';

export default class DobYear extends PureComponent {

	static propTypes = {
		year: PropTypes.number,
		onYearChange: PropTypes.func,
	};

	render() {
		const { year, onYearChange } = this.props;
		const years = sequence(80);
		const lastValidYear = new Date().getFullYear() - 18;

		return (
			<select id="dobyy" name="dobyy" defaultValue={year} onChange={onYearChange}>
				<option disabled>Year</option>
				{years.map((o, i) =>
					<option key={i} value={lastValidYear - i}>{lastValidYear - i}</option>
				)}
			</select>
		);
	}
}
