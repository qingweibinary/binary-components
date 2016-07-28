import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

export default class M extends PureComponent {

	static propTypes = {
		id: PropTypes.string,
		className: PropTypes.string,
		m: PropTypes.string.isRequired,
		values: PropTypes.object,
	};

	render() {
		const { m, values, id, className } = this.props;

		return (
			<FormattedMessage id={m} defaultMessage={m} values={values}>
				{message =>
					<span id={id} className={className}>
						{message}
					</span>
				}
			</FormattedMessage>
		);
	}
}
