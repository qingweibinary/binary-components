import React, { PureComponent } from 'react';

type Residence = {
	value: string,
	text: string,
	disabled: boolean,
}

export default class Countries extends PureComponent {

	props: {
		value: string,
		onChange: (e: SyntheticEvent) => void,
		residenceList: Residence[],
	};

	static defaultProps = {
		residenceList: [],
	};

	render() {
		const { onChange, value, residenceList } = this.props;

		return (
			<select name="residence" onChange={onChange} defaultValue={value}>
                <option value="">Country of Residence</option>
				{residenceList.map((x: Residence) =>
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
