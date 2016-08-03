import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import RangeGroup from '../RangeGroup';

describe('<RangeGroup />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<RangeGroup items={[]} />);
        expect(wrapper.type()).to.equal('fieldset');
    });

    it('renders label if provided', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <RangeGroup label="someLabel" />
            </IntlProvider>
        );
        expect(wrapper.text()).to.include('someLabel');
    });

    it('renders range labels under input', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <RangeGroup items={['item1', 'item2', 'item3']} />
            </IntlProvider>
        );
        expect(wrapper.find('span')).to.have.length(3);
    });
});
