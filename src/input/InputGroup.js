import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Label from '../i18n/Label';

type Value = number | Date | string;

export default class InputGroup extends PureComponent {

	props: {
		type: string,
		id: string,
		className: string,
		label: string,
		list: string,
		defaultValue: Value,
		value: Value,
		min: Value,
		max: Value,
		step: number,
		readOnly: boolean,
		placeholder: string,
		onChange: (e: SyntheticEvent) => void,
		autoComplete: string,
		maxLength: string,
	};

	render() {
		const { label, className, id, placeholder, ...rest } = this.props;

		return (
			<fieldset className={className}>
				{label && <Label htmlFor={id} text={label} />}
				{placeholder ?
					<FormattedMessage id={placeholder} defaultMessage={placeholder}>
						{(message: string) =>
							<input id={id} placeholder={message} {...rest} />
						}
					</FormattedMessage> :
					<input id={id} {...rest} />
				}
			</fieldset>
		);
	}
}
