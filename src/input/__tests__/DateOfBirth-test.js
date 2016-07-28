import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DateOfBirth from '../DateOfBirth';

describe('<DateOfBirth />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<DateOfBirth />);
        expect(wrapper.type()).to.not.equal(null);
    });
});
