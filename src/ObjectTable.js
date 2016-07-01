import React, { PropTypes, Component } from 'react';
import ObjectTableRow from './ObjectTableRow';
import M from './M';

export default class ObjectTable extends Component {

	static propTypes = {
		object: PropTypes.object,
	};

	render() {
		const { object } = this.props;

		return (
			<table>
				<thead>
					<tr>
						<th>
							<M m="Name" />
						</th>
						<th>
							<M m="Value" />
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(object).map(k =>
						<ObjectTableRow key={k} name={k} value={object[k]} />)}
				</tbody>
			</table>
		);
	}
}
