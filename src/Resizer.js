import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Resizer extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		onResize: PropTypes.func.isRequired,
		className: PropTypes.string,
	};

	onMouseDown = () => {
		this.addGlobalEventHandlers();
	}

	addGlobalEventHandlers() {
		window.addEventListener('mousemove', this.onGlobalMouseMove);
		window.addEventListener('mouseup', this.onGlobalMouseUp);
	}

	onGlobalMouseMove = e => {
		this.props.onResize(e);
	}

	onGlobalMouseUp = e => {
		this.props.onResize(e);
		window.removeEventListener('mousemove', this.mousemove);
		window.removeEventListener('mouseup', this.mouseup);
	}

	render() {
		return (
			<div
				className={this.props.className}
				onMouseDown={this.onMouseDown}
			>
				<span className="resizer-handle" />
			</div>
		);
	}
}
