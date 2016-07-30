import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import OpenCloseNotice from '../OpenCloseNotice';

describe('<OpenCloseNotice />', () => {
    it('renders a closed notice when no props', () => {
        const wrapper = shallow(<OpenCloseNotice />);
        expect(wrapper.prop('className')).to.equal('closed-notice');
    });

    it('renders an open notice when no isOpen is true', () => {
        const wrapper = shallow(<OpenCloseNotice isOpen />);
        expect(wrapper.prop('className')).to.equal('open-notice');
    });
});
