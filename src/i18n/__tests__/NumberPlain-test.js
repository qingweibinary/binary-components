import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NumberPlain from '../NumberPlain';

describe('<NumberPlain />', () => {
    it('does not render when value is not provided', () => {
        const wrapper = shallow(<NumberPlain />);
        expect(wrapper.type()).to.equal(null);
    });

    it('passes className to span', () => {
        const output = shallow(<NumberPlain className="test-class" value={123} />);
        expect(output.props().className).to.equal('test-class');
    });
});
