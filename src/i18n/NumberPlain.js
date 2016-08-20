import React, { PureComponent } from 'react';
import { FormattedNumber } from 'react-intl';

export default class NumberPlain extends PureComponent {

	props: {
		currency?: string,
		value: any,
		digits: number,
		className?: string,
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
					currencyDisplay="symbol"
					minimumFractionDigits={digits}
					maximumFractionDigits={digits}
				/>
			</span>
		);
	}
}
