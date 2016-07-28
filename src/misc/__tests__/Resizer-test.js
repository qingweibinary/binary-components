import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Resizer from '../Resizer';

describe('<Resizer />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<Resizer onResize={() => {}} />);
        expect(wrapper.type()).to.not.equal(null);
    });
});
