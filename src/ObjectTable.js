import React, { PropTypes, Component } from 'react';
import ObjectTableRow from './ObjectTableRow';
import M from './M';

const ObjectTable = ({ object }) => (
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
			{Object.keys(object).map(k => <ObjectTableRow key={k} name={k} value={object[k]} />)}
		</tbody>
	</table>
);

ObjectTable.propTypes = {
	object: PropTypes.object,
};
export default ObjectTable;
