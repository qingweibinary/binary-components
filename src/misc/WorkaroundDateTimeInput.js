import React, { PureComponent } from 'react';

// this component is to workaround react bug with chrome rendering engine
// https://github.com/facebook/react/issues/7233
// TODO: once 15.3.1 is release this workaround should be removed

export default class WorkaroundDateTimeInput extends PureComponent {

    props: {
        type: 'time' | 'date',
        className: string,
        min: string,
        max: string,
        onChange: (e: SyntheticEvent) => void,
        defaultValue: any,
        maxLength: number,
    };

    setDefaultValue = (inputElement: any) => {
        if (!inputElement) return;
        inputElement.value = '';
        inputElement.value = this.props.defaultValue;
    }

    render() {
        return (
            <input {...this.props} ref={this.setDefaultValue} />
        );
    }
}
