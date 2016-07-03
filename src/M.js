import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class M extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		id: PropTypes.string,
		className: PropTypes.string,
		m: PropTypes.string,
		values: PropTypes.object,
	};

	static defaultProps = {
		m: '',
	};

	render() {
		const { m, values, id, className } = this.props;

		return (
			<FormattedMessage id={m} defaultMessage={m} values={values}>
				{message =>
					<span id={id} className={className}>
						{message}
					</span>
				}
			</FormattedMessage>
		);
	}
}
