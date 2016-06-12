import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';
import M from '../src/M';
import Button from '../src/Button';
import DirectionAndValue from '../src/DirectionAndValue';
import Label from '../src/Label';
import ErrorMsg from '../src/ErrorMsg';

storiesOf('Translated', module)
    .add('M', () =>
        <IntlProvider locale="en">
            <M m="Trade" />
         </IntlProvider>
    )
    .add('Button', () =>
        <IntlProvider locale="en">
            <Button text="Trade" />
        </IntlProvider>
    )
    .add('Label', () =>
        <IntlProvider locale="en">
            <Label text="Trade" />
        </IntlProvider>
    )
    .add('ErrorMsg', () =>
        <IntlProvider locale="en">
            <ErrorMsg text="Some error" />
        </IntlProvider>
    )
    .add('DirectionAndValue', () =>
        <IntlProvider locale="en">
            <div>
                <DirectionAndValue diff={-1} value={150} />
                <DirectionAndValue value={150} />
                <DirectionAndValue diff={1} value={150} />
            </div>
        </IntlProvider>
    );
