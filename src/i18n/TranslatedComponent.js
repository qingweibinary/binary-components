import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { FormattedMessage } from 'react-intl';

export default class TranslatedComponent extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		id: PropTypes.string,
		className: PropTypes.string,
		component: PropTypes.string.isRequired,
		text: PropTypes.string,
	};

	static defaultProps = {
		text: '',
	};

	render() {
		const { component, text, id, className } = this.props;

		return (
			<FormattedMessage id={text} defaultMessage={text}>
				{message => React.createElement(component, { id, className }, [message])}
			</FormattedMessage>
		);
	}
}
