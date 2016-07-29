import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RadioGroup from '../RadioGroup';

describe('<RadioGroup />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<RadioGroup />);
        expect(wrapper.type()).to.equal('fieldset');
    });

    it('renders a RadioItems per option', () => {
        const wrapper = shallow(
            <RadioGroup options={['option1', 'option2', 'option3']} />
        );
        expect(wrapper.find('RadioItem')).to.have.length(3);
    });
});
