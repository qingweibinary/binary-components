import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';
import { errorToString } from 'binary-utils';
import P from './P';

export default class Error extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
	};

	render() {
		const { text, className } = this.props;

		if (!text) return null;

		const classes = classnames('errorfield', className);
		const msg = errorToString(text);

		return (
			<P className={classes} text={msg} />
		);
	}
}
