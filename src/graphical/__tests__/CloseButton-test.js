import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CloseButton from '../CloseButton';

describe('<CloseButton />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<CloseButton />);
        expect(wrapper.type()).to.not.equal(null);
    });
});
