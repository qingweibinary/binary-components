import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NumericInput from '../src/input/NumericInput';
import DateOfBirth from '../src/input/DateOfBirth';

storiesOf('Inputs', module)
    .add('NumericInput', () =>
        <NumericInput min={0} max={500} defaultValue={10} />
    )
    .add('NumericInput (no decimals)', () =>
        <NumericInput min={0} max={500} integer />
    )
    .add('DateOfBirth', () =>
        <DateOfBirth />
    );
