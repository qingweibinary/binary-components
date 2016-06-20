import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Clock from '../src/Clock';
import DigitStatsChart from '../src/DigitStatsChart';
import FormattedDateRange from '../src/FormattedDateRange';
import Tab from '../src/Tab';
import TabList from '../src/TabList';

storiesOf('Misc', module)
    .add('Clock', () =>
        <Clock />
    )
    .add('DigitStatsChart', () =>
        <DigitStatsChart stats={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
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
