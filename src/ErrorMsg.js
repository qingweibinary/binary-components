import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import shouldPureComponentUpdate from 'react-pure-render/function';
import classnames from 'classnames';
import errorToString from 'binary-utils/lib/errorToString';

export default class ErrorMsg extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
	};

	render() {
		const { text, className } = this.props;

		if (!text) return null;

		return (
			<FormattedMessage id={text} defaultMessage={text}>
				{message =>
					<p className={classnames('errorfield', className)}>
						{errorToString(message)}
					</p>
				}
			</FormattedMessage>
		);
	}
}
