import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NumericInput from '../src/input/NumericInput';
import DateOfBirth from '../src/input/DateOfBirth';

storiesOf('Inputs', module)
    .add('NumericInput', () =>
        <NumericInput />
    )
    .add('DateOfBirth', () =>
        <DateOfBirth />
    );
