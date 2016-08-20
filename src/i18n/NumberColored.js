import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { directionClassName } from 'binary-utils';
import NumberPlain from './NumberPlain';

export default class NumberColored extends PureComponent {

	props: {
		value: number,
		currency: string,
		isProfit?: () => boolean,
		digits?: number,
		className?: string,
	};

	static defaultProps = {
		isProfit: (v: boolean) => v,
	};

	render() {
		const { value, currency, digits, isProfit, className } = this.props;
		const classes = classnames(directionClassName(isProfit(value)), className);

		return (
			<NumberPlain
				className={classes}
				value={value}
				currency={currency}
				digits={digits}
			/>
		);
	}
}
