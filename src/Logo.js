import React, { PureComponent } from 'react';

export default class Logo extends PureComponent {

	shouldComponentUpdate = () => false;

	render() {
		return (
			<div id="logo">
				<img src="img/binary-symbol-logo.svg" role="presentation" />
			</div>
		);
	}
}
