import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import M from '../M';

describe('<M />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<M />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('renders a translated span', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <M m="someText" />
             </IntlProvider>
        );
        expect(wrapper.find('span')).to.have.length(1);
    });

    it('can translate text', () => {
        const wrapper = shallow(<M m="some text" />);
        expect(wrapper.find('FormattedMessage')).to.have.length(1);
    });
});
