import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import SelectGroup from '../SelectGroup';

describe('<SelectGroup />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<SelectGroup />);
        expect(wrapper.type()).to.equal('fieldset');
    });

    it('passes className to fieldset', () => {
        const wrapper = shallow(<SelectGroup className="test-class" />);
        expect(wrapper.props().className).to.equal('test-class');
    });

    it('passes id to select', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <SelectGroup id="test-id" />
            </IntlProvider>
        );
        expect(wrapper.find('#test-id')).to.have.length(1);
    });

    it('can render options', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <SelectGroup options={['option1', 'option2']} />
            </IntlProvider>
        );
        expect(wrapper.find('option')).to.have.length(2);
    });
});
