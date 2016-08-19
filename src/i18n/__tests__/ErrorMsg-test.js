import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ErrorMsg from '../ErrorMsg';

describe('<ErrorMsg />', () => {
    it('does not render when no properties provided', () => {
        const wrapper = shallow(<ErrorMsg />);
        expect(wrapper.type()).to.equal(null);
    });

    it('renders P component', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <ErrorMsg className="someClass" text="some" />
             </IntlProvider>
        );
        expect(wrapper.find('P')).to.have.length(1);
    });

    it('appends className passed to classes of P', () => {
        const wrapper = shallow(<ErrorMsg className="someClass" text="some" />);
        expect(wrapper.prop('className')).to.contain('someClass');
    });
});
