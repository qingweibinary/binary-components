import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

export type Props = {
	component: string,
	text: string,
};

export default class TranslatedComponent extends PureComponent {

	static propTypes = {
		component: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	};

	static defaultProps = {
		text: '',
	};

	render() {
		const { component, text, ...rest } = this.props;

		return (
			<FormattedMessage id={text} defaultMessage={text}>
				{(message: React$Element<TranslatedComponent>) =>
					React.createElement(component, rest, [message])
				}
			</FormattedMessage>
		);
	}
}
