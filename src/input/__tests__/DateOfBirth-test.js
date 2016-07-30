import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import DateOfBirth from '../DateOfBirth';

describe('<DateOfBirth />', () => {
    it('renders even whithout properties', () => {
        const wrapper = render(<DateOfBirth />);
        expect(wrapper).to.not.equal(null);
    });
});
