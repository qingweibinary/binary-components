import React, { PropTypes, Component } from 'react';

export default class NumericInput extends Component {

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
        value: 0,
        valueList: [],
        onChange: () => {},
    };

    stepUp() {
        const { step, value, onChange } = this.props;
        const newValue = +value + step;
        onChange({ target: { value: newValue } });
    }

    stepDown() {
        const { step, value, onChange } = this.props;
        const newValue = +value - step;
        onChange({ target: { value: newValue } });
    }

    render() {
        const { className, step, min, max, value, valueList, onChange } = this.props;

        return (
            <div className={className}>
                <button className="btn-flat" onClick={::this.stepDown}>&ndash;</button>
                <input
                    type="number"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    list="values"
                    onChange={onChange}
                />
                <button className="btn-flat" onClick={::this.stepUp}>+</button>
                <datalist id="values">
                    {valueList.map(x =>
                        <option key={x} value={x} />
                    )}
                </datalist>
            </div>
        );
    }
}
