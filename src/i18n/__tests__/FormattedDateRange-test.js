import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import FormattedDateRange from '../FormattedDateRange';

describe('<FormattedDateRange />', () => {
    it('renders two provided dates in localized format', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <FormattedDateRange
                    fromDate={new Date('2000-01-01')}
                    toDate={new Date('2010-10-10')}
                />
            </IntlProvider>
        );
        expect(wrapper.text()).to.contain('1/1/2000');
        expect(wrapper.text()).to.contain('10/10/2010');
    });
});
