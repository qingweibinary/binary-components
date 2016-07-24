import React, { PropTypes, PureComponent } from 'react';

export default class NumericInput extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        value: PropTypes.number,
        valueList: PropTypes.array,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        step: 10,
        valueList: [],
        onChange: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    onStepUp = () => {
        const { step, onChange } = this.props;
        const { value } = this.state;
        const newValue = +value + step;
        this.setState({ value: newValue});
        onChange({ target: { value: newValue } });
    }

    onStepDown = () => {
        const { step, onChange } = this.props;
        const { value } = this.state;
        const newValue = +value - step;
        this.setState({ value: newValue});
        onChange({ target: { value: newValue } });
    }

    onChange = e => {
        this.setState({ value: e.target.value });
        e.persist();
        this.props.onChange(e);
    }

    render() {
        const { className, step, min, max, valueList } = this.props;
        const { value } = this.state;
        return (
            <div className={className}>
                <button className="btn-flat step-down" onClick={this.onStepDown}>&ndash;</button>
                <input
                    type="number"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    list="values"
                    onChange={this.onChange}
                />
                <button className="btn-flat step-up" onClick={this.onStepUp}>+</button>
                <datalist id="values">
                    {valueList.map(x =>
                        <option key={x} value={x} />
                    )}
                </datalist>
            </div>
        );
    }
}
