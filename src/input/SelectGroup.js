import React, { PropTypes, PureComponent } from 'react';
import Label from '../i18n/Label';

export default class SelectGroup extends PureComponent {

	static propTypes = {
		hint: PropTypes.string,
		id: PropTypes.string,
		className: PropTypes.string,
		label: PropTypes.string,
		onChange: PropTypes.func,
		options: PropTypes.array,
		readOnly: PropTypes.bool,
		value: PropTypes.string,
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
					{options.map(o =>
						<option key={o.value} value={o.value}>{o.text}</option>
					)}
				</select>
				{hint && <p className="hint">{hint}</p>}
			</fieldset>
		);
	}
}
