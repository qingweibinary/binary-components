import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';
import M from '../src/M';
import Button from '../src/Button';
import DirectionAndValue from '../src/DirectionAndValue';
import FormattedDateRange from '../src/FormattedDateRange';
import Label from '../src/Label';
import ErrorMsg from '../src/ErrorMsg';
import Th from '../src/Th';
import Td from '../src/Td';
import InputGroup from '../src/InputGroup';
import SelectGroup from '../src/SelectGroup';


storiesOf('i18n', module)
    .add('M', () =>
        <IntlProvider locale="en">
            <M m="Trade" />
         </IntlProvider>
    )
    .add('Button', () =>
        <IntlProvider locale="en">
            <Button className="some-class" text="Trade" onClick={() => alert('hello')} />
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
    )
    .add('FormattedDateRange', () =>
        <IntlProvider locale="en">
            <FormattedDateRange fromDate={new Date()} toDate={new Date()} />
        </IntlProvider>
    )
    .add('InputGroup', () =>
        <IntlProvider locale="en">
            <InputGroup
                type="text"
                label="Some label"
                placeholder="Some placeholder"
            />
        </IntlProvider>
    )
    .add('SelectGroup', () =>
        <IntlProvider locale="en">
            <SelectGroup
                label="Some label"
                placeholder="Some placeholder"
            />
        </IntlProvider>
    );
