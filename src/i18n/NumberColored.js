import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';
import { directionClassName } from 'binary-utils';
import NumberPlain from './NumberPlain';

export default class NumberColored extends PureComponent {

	static propTypes = {
		value: PropTypes.any,
		currency: PropTypes.any,
		isProfit: PropTypes.func,
		digits: PropTypes.number,
		className: PropTypes.string,
	};

	static defaultProps = {
		isProfit: v => v,
	};

	render() {
		const { value, currency, digits, isProfit, className } = this.props;
		const classes = classnames(directionClassName(isProfit(value)), className);

		return (
			<NumberPlain className={classes} value={value} currency={currency} digits={digits} />
		);
	}
}
