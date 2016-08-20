import React, { PureComponent } from 'react';
import Label from '../i18n/Label';

type Option = {
	value: string,
	text: string,
}

export default class SelectGroup extends PureComponent {

	props: {
		hint: string,
		id: string,
		className: string,
		label: string,
		options: Option[],
		readOnly: bool,
		value: string,
		onChange: (e: SyntheticEvent) => void,
	};

	static defaultProps = {
		options: [],
	};

	render() {
		const { className, id, label, hint, value, options, readOnly, onChange } = this.props;

		return (
			<fieldset className={className}>
				{label && <Label htmlFor={id} text={label} />}
				<select id={id} readOnly={readOnly} onChange={onChange} value={value}>
					{options.map((o: Option) =>
						<option key={o.value} value={o.value}>{o.text}</option>
					)}
				</select>
				{hint && <p className="hint">{hint}</p>}
			</fieldset>
		);
	}
}
