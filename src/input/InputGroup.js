import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import M from '../i18n/M';

const valueTypes = [PropTypes.number, PropTypes.instanceOf(Date), PropTypes.string];

export default class InputGroup extends PureComponent {

	static propTypes = {
		type: PropTypes.string,
		id: PropTypes.string,
		className: PropTypes.string,
		label: PropTypes.string,
		hint: PropTypes.string,
		list: PropTypes.string,
		defaultValue: PropTypes.oneOfType(valueTypes),
		value: PropTypes.oneOfType(valueTypes),
		min: PropTypes.oneOfType(valueTypes),
		max: PropTypes.oneOfType(valueTypes),
		step: PropTypes.any,
		readOnly: PropTypes.bool,
		placeholder: PropTypes.string,
		onChange: PropTypes.func,
		autoComplete: PropTypes.string,
	};

	render() {
		const { label, className, hint, id, placeholder, ...rest } = this.props;

		return (
			<fieldset className={className}>
				{label && <label htmlFor={id}>
					<M m={label} />
				</label>}
				{placeholder ?
					<FormattedMessage id={placeholder} defaultMessage={placeholder}>
						{message =>
							<input id={id} placeholder={message} {...rest} />
						}
					</FormattedMessage> :
					<input id={id} {...rest} />
				}
				{hint && <p className="hint">
					<M m={hint} />
				</p>}
			</fieldset>
		);
	}
}
