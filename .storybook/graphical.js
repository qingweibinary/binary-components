import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CloseButton from '../src/CloseButton';
import Direction from '../src/Direction';
import DownArrow from '../src/DownArrow';
import Info from '../src/Info';
import Logo from '../src/Logo';
import LogoSpinner from '../src/LogoSpinner';
import Star from '../src/Star';

storiesOf('Graphical', module)
    .add('CloseButton', () =>
        <CloseButton />
    )
    .add('Info', () =>
        <Info />
    )
    .add('Direction', () =>
        <div>
            <Direction diff={-1} />
            <Direction />
            <Direction diff={1} />
        </div>
    )
    .add('DownArrow', () =>
        <DownArrow />
    )
    .add('Logo', () =>
        <Logo />
    )
    .add('LogoSpinner', () =>
        <LogoSpinner />
    )
    .add('Star', () =>
        <Star />
    );
