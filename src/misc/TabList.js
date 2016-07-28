import React, { PropTypes, PureComponent } from 'react';

export default class TabList extends PureComponent {

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node,
        activeIndex: PropTypes.number,
        vertical: PropTypes.bool,
        showText: PropTypes.bool,
        showIcons: PropTypes.bool,
        style: PropTypes.object,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        activeIndex: 0,
        vertical: false,
        showText: true,
        showIcons: true,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: props.activeIndex,
        };
    }

    onTabSelected = index => {
        const { onChange } = this.props;
        onChange(index);
        this.setState({ activeIndex: index });
    }

    render() {
        const { id, className, vertical, showIcons, showText } = this.props;
        const { activeIndex } = this.state;

        return (
            <div
                id={id}
                role="tablist"
                className={(vertical ? 'vertical ' : '') + className}
            >
                {React.Children.map(this.props.children, (child, index) =>
                    child && React.cloneElement(child, {
                        selected: activeIndex === index,
                        showIcon: showIcons,
                        showText,
                        index,
                        onClick: () => this.onTabSelected(index),
                    })
                )}
            </div>
        );
    }
}
