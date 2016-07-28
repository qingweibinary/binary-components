import React, { PropTypes, PureComponent } from 'react';

export default class Resizer extends PureComponent {

	static propTypes = {
		onResize: PropTypes.func.isRequired,
		className: PropTypes.string,
	};

	onMouseDown = () => {
		window.addEventListener('mousemove', this.onGlobalMouseMove);
		window.addEventListener('mouseup', this.onGlobalMouseUp);
	}

	onGlobalMouseMove = e => {
		this.props.onResize(e);
	}

	onGlobalMouseUp = e => {
		this.props.onResize(e);
		window.removeEventListener('mousemove', this.onGlobalMouseMove);
		window.removeEventListener('mouseup', this.onGlobalMouseUp);
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
