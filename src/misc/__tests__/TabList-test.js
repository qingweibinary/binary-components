import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import TabList from '../TabList';
import Tab from '../Tab';

describe('<TabList />', () => {
    it('should render', () => {
        const wrapper = shallow(<TabList />);
        expect(wrapper).to.be.ok;
    });

    it('should render a single item if contained', () => {
        const wrapper = shallow(<TabList>Hello</TabList>);
        expect(wrapper.nodes).to.have.length(1);
    });

    it('should render as many children as contained', () => {
        const wrapper = shallow(
            <TabList>
                <span />
                <span />
                <span />
            </TabList>
        );
        expect(wrapper.find('span')).to.have.length(3);
    });

    it('should set at least one child to selected', () => {
        const wrapper = shallow(
            <TabList>
                <span />
            </TabList>
        );
        expect(wrapper.find('span[selected]')).to.have.length(1);
    });

    it('wuut', () => {
        const onTabClick = sinon.spy();
        const wrapper = shallow(
            <TabList onChange={onTabClick}>
                <Tab />
            </TabList>
        );
        wrapper.find('Tab').simulate('click');
        expect(onTabClick).to.have.property('callCount', 1);
    });
});
