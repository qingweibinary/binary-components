import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DirectionAndValue from '../DirectionAndValue';

describe('<DirectionAndValue />', () => {
    it('renders a Direction and NumberPlain components', () => {
        const wrapper = shallow(<DirectionAndValue />);
        expect(wrapper.find('Direction')).to.have.length(1);
        expect(wrapper.find('NumberPlain')).to.have.length(1);
    });
});
