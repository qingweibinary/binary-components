import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NumericInput from '../src/NumericInput';
import DateOfBirth from '../src/DateOfBirth';
import InputGroup from '../src/InputGroup';

storiesOf('Inputs', module)
    .add('NumericInput', () =>
        <NumericInput />
    )
    .add('DateOfBirth', () =>
        <DateOfBirth />
    )
    .add('InputGroup', () =>
        <InputGroup />
    );
