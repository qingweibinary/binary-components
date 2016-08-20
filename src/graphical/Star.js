import React, { PureComponent } from 'react';

export default class Star extends PureComponent {

    props: {
		on: boolean,
	};

    render() {
        const { on } = this.props;
        const imgFile = on ? 'img/star-on.svg' : 'img/star-off.svg';

        return (
            <img
                style={{ minWidth: '1rem', width: '1rem' }}
                src={imgFile}
                role="presentation"
            />
        );
    }
}
