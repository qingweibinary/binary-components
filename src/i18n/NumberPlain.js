import React, { PropTypes, PureComponent } from 'react';
import { FormattedNumber } from 'react-intl';

export default class NumberPlain extends PureComponent {

	static propTypes = {
		currency: PropTypes.string,
		value: PropTypes.any,
		digits: PropTypes.number,
		className: PropTypes.string,
	};

	static defaultProps = {
		digits: 2,
	};

	render() {
		const { currency, className, digits } = this.props;
		const value = +this.props.value;

		if (isNaN(value)) return null;

		return (
			<span className={className}>
				<FormattedNumber
					style={currency && 'currency'}
					currency={currency}
					value={value}
					currencyDisplay="code"
					minimumFractionDigits={digits}
					maximumFractionDigits={digits}
				/>
			</span>
		);
	}
}
