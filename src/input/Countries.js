import React, { PureComponent, PropTypes } from 'react';

export default class Countries extends PureComponent {

	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func,
		residenceList: PropTypes.array.isRequired,
	};

	static defaultProps = {
		residenceList: [],
	};

	render() {
		const { onChange, value, residenceList } = this.props;

		return (
			<select name="residence" onChange={onChange} defaultValue={value}>
                <option value="">Country of Residence</option>
				{residenceList.map(x =>
                    <option
                        key={x.value}
                        value={x.value}
                        disabled={x.disabled}
                    >
                        {x.text}
                    </option>
                 )}
            </select>
		);
	}
}
