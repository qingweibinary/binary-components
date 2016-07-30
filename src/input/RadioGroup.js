import React, { PropTypes, PureComponent } from 'react';
import RadioItem from './RadioItem';

export default class RadioGroup extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		name: PropTypes.string,
		text: PropTypes.string,
		img: PropTypes.string,
		options: PropTypes.array,
		onChange: PropTypes.func.isRequired,
		value: PropTypes.any,
	};

	static defaultProps = {
		className: 'radio-selector',
		options: [],
	};

	render() {
		const { className, onChange, name, options, value } = this.props;
		return (
			<fieldset className={className}>
				{options.map(o =>
					<RadioItem
						key={name + o.value}
						checked={o.value === value}
						img={o.img}
						label={o.text}
						name={name}
						onChange={onChange}
						value={o.value}
					/>
				)}
			</fieldset>
		);
	}
}
