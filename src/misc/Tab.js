import React, { PropTypes, PureComponent } from 'react';
import CloseButton from '../graphical/CloseButton';
import M from '../i18n/M';

export default class Tab extends PureComponent {

    static propTypes = {
        imgSrc: PropTypes.string,
        index: PropTypes.number,
        selected: PropTypes.bool,
        showIcon: PropTypes.bool,
        showText: PropTypes.bool,
        text: PropTypes.string,
        closable: PropTypes.bool,
        onClick: PropTypes.func,
        onClose: PropTypes.func,
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
