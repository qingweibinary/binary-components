import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Countries from '../Countries';

describe('<Countries />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<Countries />);
        expect(wrapper.type()).to.equal('select');
    });

    it('renders options', () => {
        const residenceList = [
            { value: 'country1' },
            { value: 'country2', disabled: true },
            { value: 'country3' },
        ];
        const wrapper = shallow(<Countries residenceList={residenceList} />);
        expect(wrapper.find('option')).to.have.length(3 + 1);
    });
});
