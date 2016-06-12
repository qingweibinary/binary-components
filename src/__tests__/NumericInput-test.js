import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NumericInput from '../NumericInput';

describe('<NumericInput />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<NumericInput />);
        expect(wrapper.type()).to.equal('div');
    });
});
