import React, { PropTypes, PureComponent } from 'react';
import Label from '../i18n/Label';

export default class RangeGroup extends PureComponent {

	static propTypes = {
		items: PropTypes.array,
		id: PropTypes.string,
		label: PropTypes.string,
		defaultValue: PropTypes.number,
		min: PropTypes.number,
		max: PropTypes.number,
		step: PropTypes.number,
		readOnly: PropTypes.bool,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		items: [],
	};

	render() {
		const { id, label, items, ...rest } = this.props;

		return (
			<fieldset className="range-selector">
				{label && <Label htmlFor={id} text={label} />}
				<input
					type="range"
					{...rest}
				/>
				<div className="range-selector-items">
					{items.map(i => <label key={i}>{i}</label>)}
				</div>
			</fieldset>
		);
	}
}
