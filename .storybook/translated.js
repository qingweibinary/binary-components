import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';
import M from '../src/M';
import Button from '../src/Button';

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
    );
