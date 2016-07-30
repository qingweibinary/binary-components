import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LabeledText from '../LabeledText';

describe('<LabeledText />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<LabeledText />);
        expect(wrapper.type()).to.not.equal(null);
    });
});
