import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { directionClassName } from 'binary-utils';
import NumberPlain from './NumberPlain';

export default class NumberColored extends PureComponent {

	props: {
		className?: string,
		currency?: string,
		digits: number,
		style: 'decimal' | 'currency' | 'percent',
		value: number,
	};

	static defaultProps = {
		style: 'currency',
		digits: 2,
	};

	render() {
		const { value, currency, digits, className } = this.props;
		const classes = classnames(directionClassName(value), className);

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
