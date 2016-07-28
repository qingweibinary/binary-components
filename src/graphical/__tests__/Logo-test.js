import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Logo from '../Logo';

describe('<Logo />', () => {
    it('renders logo successfully', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper.find('#logo').length).to.equal(1);
    });
});
