import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Clock from '../src/Clock';
import DigitStatsChart from '../src/DigitStatsChart';
import Tab from '../src/Tab';
import TabList from '../src/TabList';

storiesOf('Misc', module)
    .add('Clock', () =>
        <Clock />
    )
    .add('DigitStatsChart', () =>
        <DigitStatsChart stats={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    )
    .add('TabList', () =>
        <TabList onChange={e => window.console.log(e)}>
            <Tab text="First Tab" />
            <Tab text="Second Tab" />
        </TabList>
    );
