import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DownArrow from '../DownArrow';

describe('<DownArrow />', () => {
    it('renders an svg element', () => {
        const wrapper = shallow(<DownArrow />);
        expect(wrapper.type()).to.equal('svg');
    });
});
