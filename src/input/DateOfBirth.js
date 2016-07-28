import React, { PureComponent, PropTypes } from 'react';
import DobDay from './DobDay';
import DobMonth from './DobMonth';
import DobYear from './DobYear';

export default class DateOfBirth extends PureComponent {

	static propTypes = {
		date: PropTypes.instanceOf(Date),
		onDayChange: PropTypes.func,
		onMonthChange: PropTypes.func,
		onYearChange: PropTypes.func,
	};

	static defaultProps = {
		date: new Date(),
	};

	render() {
		const { date, onDayChange, onMonthChange, onYearChange } = this.props;

		return (
			<span className="dob">
				<DobDay day={date.getDate()} onDayChange={onDayChange} />
				<DobMonth month={date.getMonth()} onMonthChange={onMonthChange} />
				<DobYear year={date.getFullYear()} onYearChange={onYearChange} />
			</span>
		);
	}
}
