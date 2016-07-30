import React, { PropTypes, PureComponent } from 'react';
import { FormattedDate } from 'react-intl';

export default class FormattedDateRange extends PureComponent {

	static propTypes = {
		fromDate: PropTypes.instanceOf(Date),
		toDate: PropTypes.instanceOf(Date),
	};

	render() {
		const { fromDate, toDate } = this.props;

		return (
			<span>
				<FormattedDate value={fromDate} />
				&nbps;
				–
				&nbsp;
				<FormattedDate value={toDate} />
			</span>
		);
	}
}
