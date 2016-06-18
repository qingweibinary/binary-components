import React, { Component } from 'react';

export default class Logo extends Component {

	shouldComponentUpdate = () => false;

	render() {
		return (
			<div id="logo">
				<img src="/img/binary-symbol-logo.svg" role="presentation" />
			</div>
		);
	}
}
