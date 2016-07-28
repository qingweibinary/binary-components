import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Direction from '../Direction';

describe('<Direction />', () => {
    it('renders without any properties', () => {
        const wrapper = shallow(<Direction />);
        expect(wrapper.find('DirectionNone')).to.have.length(1);
    });

    it('renders when direction is negative', () => {
        const wrapper = shallow(<Direction diff={-123} />);
        expect(wrapper.find('DirectionDown')).to.have.length(1);
    });

    it('renders when direction is positive', () => {
        const wrapper = shallow(<Direction diff={123} />);
        expect(wrapper.find('DirectionUp')).to.have.length(1);
    });
});
