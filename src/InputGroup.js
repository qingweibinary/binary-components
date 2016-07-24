import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import M from './M';

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
		const { id, className, label, type, hint, value, min, max, list,
			readOnly, placeholder, onChange, autoComplete, defaultValue, step } = this.props;

		return (
			<fieldset className={className}>
				{label && <label htmlFor={id}>
					<M m={label} />
				</label>}
				<FormattedMessage id={placeholder} defaultMessage={placeholder}>
					{message =>
						<input
							id={id}
							type={type}
							value={value}
							step={step}
							list={list}
							defaultValue={defaultValue}
							readOnly={readOnly}
							placeholder={message}
							onChange={onChange}
							min={min}
							max={max}
							autoComplete={autoComplete}
						/>
					}
				</FormattedMessage>
				{hint && <p className="hint">
					<M m={hint} />
				</p>}
			</fieldset>
		);
	}
}
