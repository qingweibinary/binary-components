import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import CloseButton from './CloseButton';
import M from './M';

export default class Tab extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

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
