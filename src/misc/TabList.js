import React, { PropTypes, PureComponent } from 'react';

type Props = {
    id: string,
    className: string,
    children: Node,
    activeIndex: number,
    vertical: bool,
    showText: bool,
    showIcons: bool,
    style: Object,
    onChange: (index: number) => void,
};

type State = {
    activeIndex: number,
};

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

    constructor(props: Props) {
        super(props);

        this.state = {
            activeIndex: props.activeIndex,
        };
    }

    state: State;

    onTabSelected = (index: number): void => {
        const { onChange } = this.props;
        onChange(index);
        this.setState({ activeIndex: index });
    }

    props: Props;

    render() {
        const { id, className, vertical, showIcons, showText } = this.props;
        const { activeIndex } = this.state;

        return (
            <div
                id={id}
                role="tablist"
                className={(vertical ? 'vertical ' : '') + className}
            >
                {React.Children.map(this.props.children, (child: React$Element<any>, index: number): React$Element<any> =>
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
