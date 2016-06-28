import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';
import M from '../src/i18n/M';
import Button from '../src/i18n/Button';
import DirectionAndValue from '../src/DirectionAndValue';
import Label from '../src/i18n/Label';
import ErrorMsg from '../src/i18n/ErrorMsg';
import Th from '../src/i18n/Th';
import Td from '../src/i18n/Td';

storiesOf('i18n', module)
    .add('M', () =>
        <IntlProvider locale="en">
            <M m="Trade" />
         </IntlProvider>
    )
    .add('Button', () =>
        <IntlProvider locale="en">
            <Button className="some-class" text="Trade" />
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
    )
    .add('Table', () =>
        <IntlProvider locale="en">
            <table>
                <thead>
                    <tr>
                        <Th text="Head" />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td text="Text" />
                    </tr>
                </tbody>
            </table>
        </IntlProvider>
    );
