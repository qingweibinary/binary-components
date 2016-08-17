import React, { PropTypes, PureComponent } from 'react';

export default class NumericInput extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        decimals: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        defaultValue: PropTypes.number,
        valueList: PropTypes.array,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        defaultValue: 0,
        decimals: 2,
        step: 10,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue,
        };
    }

    onStepUp = () => {
        const { step, decimals, max } = this.props;
        const { value } = this.state;
        const newValue = +((+value + step).toFixed(decimals));

        if (newValue > max) return;

        this.onChange({ target: { value: newValue } });
    }

    onStepDown = () => {
        const { step, decimals, min } = this.props;
        const { value } = this.state;
        const newValue = +((+value - step).toFixed(decimals));

        if (newValue < min) return;

        this.onChange({ target: { value: newValue } });
    }

    onChange = e => {
        this.setState({ value: e.target.value });
        // e.persist();
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
                {valueList &&
                    <datalist id="values">
                        {valueList.map(x =>
                            <option key={x} value={x} />
                        )}
                    </datalist>
                }
            </div>
        );
    }
}
