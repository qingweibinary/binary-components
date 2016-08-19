import React, { PropTypes, PureComponent } from 'react';
import classnames from 'classnames';

export default class ServerErrorMsg extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
	};

	render() {
		const { text, className } = this.props;

		if (!text) return null;

		const classes = classnames('errorfield', className);

		return (
			<p className={classes}>{text}</p>
		);
	}
}
