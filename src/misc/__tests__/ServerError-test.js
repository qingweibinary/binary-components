import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ServerError from '../ServerError';

describe('<ServerError />', () => {
    it('does not render when no properties provided', () => {
        const wrapper = shallow(<ServerError />);
        expect(wrapper.type()).to.equal(null);
    });

    it('renders untranslated p component', () => {
        const wrapper = shallow(<ServerError className="someClass" text="some" />);
        expect(wrapper.find('p')).to.have.length(1);
    });

    it('appends className passed to classes of p', () => {
        const wrapper = shallow(<ServerError className="someClass" text="some" />);
        expect(wrapper.prop('className')).to.contain('someClass');
    });
});
