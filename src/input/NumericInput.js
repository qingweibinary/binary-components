import React, { PureComponent } from 'react';

type Props = {
    className: string,
    decimals: number,
    min: number,
    max: number,
    integer: boolean,
    defaultValue: number,
    valueList: number[],
    onChange: (newValue: number) => void,
}

export default class NumericInput extends PureComponent {

    props: Props;

    state: {
        value: string,
    }

    static defaultProps = {
        defaultValue: 0,
        decimals: 2,
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            value: props.defaultValue.toString(),
        };
    }

    step = () => {
        const { value } = this.state;
        const notInt = +value % 1 !== 0;

        return notInt ?
            0.01 :
            10 ** (value.length - 1);
    }

    updateValue = (diff: number) => {
        const { decimals } = this.props;
        const value = +this.state.value;
        const newValue = +((value + diff).toFixed(decimals));
        this.changeValue(newValue);
    }

    onStepUp = () =>
        this.updateValue(this.step());

    onStepDown = () =>
        this.updateValue(-this.step());

    changeValue = (newValue: number) => {
        const { min, max, integer } = this.props;

        let value;
        if (min > newValue) {
            value = min;
        } else if (newValue > max) {
            value = max;
        } else {
            value = integer ? Math.floor(newValue) : newValue;
        }

        this.setState({ value: value.toString() });
        const { onChange } = this.props;
        if (onChange) onChange(+value);
    }

    onChange = (e: any) =>
        this.changeValue(e.target.value);

    render() {
        const { integer, className, min, max, valueList } = this.props;
        const { value } = this.state;
        const iosHackEnabled = integer && navigator && navigator.userAgent.match(/iP(ad|hone)/i);

        return (
            <div className={className}>
                <button className="btn-flat step-down" onClick={this.onStepDown}>&ndash;</button>
                <input
                    type={iosHackEnabled ? 'tel' : 'number'}
                    value={value}
                    min={min}
                    max={max}
                    step={this.step()}
                    list="values"
                    onChange={this.onChange}
                />
                <button className="btn-flat step-up" onClick={this.onStepUp}>+</button>
                {valueList &&
                    <datalist id="values">
                        {valueList.map((x: number) =>
                            <option key={x} value={x} />
                        )}
                    </datalist>
                }
            </div>
        );
    }
}
