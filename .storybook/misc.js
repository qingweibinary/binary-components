import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Clock from '../src/Clock';
import DigitStatsChart from '../src/DigitStatsChart';
import FormattedDateRange from '../src/FormattedDateRange';
import LabeledEntry from '../src/LabeledEntry';
import LabeledNumber from '../src/LabeledNumber';
import LabeledText from '../src/LabeledText';
import Number from '../src/Number';
import Tab from '../src/Tab';
import TabList from '../src/TabList';

storiesOf('Misc', module)
    .add('Clock', () =>
        <Clock />
    )
    .add('DigitStatsChart', () =>
        <DigitStatsChart />
    )
    .add('FormattedDateRange', () =>
        <FormattedDateRange />
    )
    .add('TabList', () =>
        <TabList>
            <Tab />
            <Tab />
        </TabList>
    );
