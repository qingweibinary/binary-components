import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TranslatedComponent from '../TranslatedComponent';
import Label from '../Label';
import Legend from '../Legend';
import Option from '../Option';
import P from '../P';
import Th from '../Th';
import Td from '../Td';
import Span from '../Span';

describe('Translated components', () => {
    it('<TranslatedComponent /> can render', () => {
        const wrapper = shallow(<TranslatedComponent />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<Label /> can render', () => {
        const wrapper = shallow(<Label />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<Legend /> can render', () => {
        const wrapper = shallow(<Legend />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<Option /> can render', () => {
        const wrapper = shallow(<Option />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<P /> can render', () => {
        const wrapper = shallow(<P />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<Th /> can render', () => {
        const wrapper = shallow(<Th />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<Td /> can render', () => {
        const wrapper = shallow(<Td />);
        expect(wrapper.type()).to.not.equal(null);
    });

    it('<Span /> can render', () => {
        const wrapper = shallow(<Span />);
        expect(wrapper.type()).to.not.equal(null);
    });
});
