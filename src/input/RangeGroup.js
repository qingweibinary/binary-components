import React, { PropTypes, PureComponent } from 'react';

export default class RangeGroup extends PureComponent {

	static propTypes = {
		items: PropTypes.array,
		id: PropTypes.string,
		label: PropTypes.string,
		hint: PropTypes.string,
		defaultValue: PropTypes.number,
		min: PropTypes.number,
		max: PropTypes.number,
		step: PropTypes.number,
		readOnly: PropTypes.bool,
		onChange: PropTypes.func,
	};

	render() {
		const { id, label, hint, items, ...rest } = this.props;

		return (
			<div className="range-selector">
				{label && <label htmlFor={id}>{label}</label>}
				<input
					type="range"
					{...rest}
				/>
				<div className="range-selector-items">
					{items.map(i => <label key={i}>{i}</label>)}
				</div>
				{hint && <p className="hint">{hint}</p>}
			</div>
		);
	}
}
