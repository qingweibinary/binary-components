import React, { PureComponent } from 'react';
import CloseButton from '../graphical/CloseButton';
import M from '../i18n/M';

export default class Tab extends PureComponent {

    props: {
        imgSrc: string,
        index: number,
        selected: boolean,
        showIcon: boolean,
        showText: boolean,
        text: string,
        closable: bool,
        onClick: (e: SyntheticEvent) => void,
        onClose: (e: SyntheticEvent) => void,
    };

    static defaultProps = {
        showText: true,
        showIcon: true,
        closable: false,
    };

    render() {
        const { imgSrc, selected, showIcon, showText, text, onClose, closable } = this.props;

        return (
            <div
                role="tab"
                aria-selected={selected}
                title={text}
                onClick={this.props.onClick}
            >
                {showIcon && imgSrc && <img src={imgSrc} role="presentation" />}
                {showText && text && <M m={text} />}
                {closable && <CloseButton onClick={onClose} />}
            </div>
        );
    }
}
