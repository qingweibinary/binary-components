import React, { PropTypes, PureComponent } from 'react';
import M from '../i18n/M';

export default class RadioItem extends PureComponent {

	static propTypes = {
		checked: PropTypes.bool,
		defaultChecked: PropTypes.bool,
		img: PropTypes.string,
		label: PropTypes.any,
		name: PropTypes.string,
		onChange: PropTypes.func,
		value: PropTypes.any,
	};

	render() {
		const { checked, defaultChecked, img, label, name, onChange, value } = this.props;
		return (
			<span className="radio-item">
				<input
					id={value}
					checked={checked}
					type="radio"
					name={name}
					value={value}
					defaultChecked={defaultChecked}
					onChange={onChange}
				/>
				<label htmlFor={value}>
					{img ? <img src={img} role="presentation" /> : null}
					{typeof label === 'string' ? <M m={label} /> : label}
				</label>
			</span>
		);
	}
}
