import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { errorToString } from 'binary-utils';

export default class ErrorMsg extends PureComponent {

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
