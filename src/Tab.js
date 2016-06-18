import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import CloseButton from './CloseButton';

export default class Tab extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    static propTypes = {
        imgSrc: PropTypes.string,
        selected: PropTypes.bool,
        showIcon: PropTypes.bool,
        showText: PropTypes.bool,
        text: PropTypes.string,
        onClick: PropTypes.func,
        closable: PropTypes.bool,
        onClose: PropTypes.func,
    };

    static defaultProps = {
        showText: true,
        showIcon: true,
        closable: false,
    };

    render() {
        const { imgSrc, selected, showIcon, showText, text, onClick, onClose, closable } = this.props;

        return (
            <div
                role="tab"
                aria-selected={selected}
                onClick={onClick}
                title={text}
            >
                {showIcon && imgSrc && <img src={imgSrc} role="presentation" />}
                {showText && text && <span>{text}</span>}
                {closable && <CloseButton onClick={onClose} />}
            </div>
        );
    }
}
