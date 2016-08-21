type LocaleData = {
    locale: string,
    [key: string]: any,
}

type MessageDescriptor = {
    id: string,
    defaultMessage: string,
    description?: string,
};

type MessageDescriptorMap = {[key: string]: MessageDescriptor};

type DateTimeFormatOptions = {
    localeMatcher?: 'best fit' | 'lookup',
    formatMatcher?: 'basic' | 'best fit',
    timeZone?: string,
    hour12?: boolean,
    weekday?: 'narrow' | 'short' | 'long',
    era?: 'narrow' | 'short' | 'long',
    year?: 'numeric' | '2-digit',
    month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
    day?: 'numeric' | '2-digit',
    hour?: 'numeric' | '2-digit',
    minute?: 'numeric' | '2-digit',
    second?: 'numeric' | '2-digit',
    timeZoneName?: 'short' | 'long',
};

type NumberFormatOptions = {
    localeMatcher?: 'best fit' | 'lookup',
    style?: 'decimal' | 'currency' | 'percent',
    currency?: string,
    currencyDisplay?: 'symbol' | 'code' | 'name',
    useGrouping?: boolean,
    minimumIntegerDigits?: number,
    minimumFractionDigits?: number,
    maximumFractionDigits?: number,
    minimumSignificantDigits?: number,
    maximumSignificantDigits?: number,
};

type IntlConfig = {
    locale?: string,
    formats?: Object,
    messages?: {[id: string]: string},
    defaultLocale?: string,
    defaultFormats?: Object,
};

type FormattedMessageProps = MessageDescriptor & {
    values?: Object,
    tagName?: string,
    children?: (...formattedMessage: React$Element<*>[]) => React$Element<*>,
};

type FormattedNumberProps = NumberFormatOptions & {
    value: any,
    format?: string,
    children?: (formattedNumber: string) => React$Element<*>,
};

type FormattedDateProps = DateTimeFormatOptions & {
    value: any,
    format?: string,
    children?: (formattedDate: string) => React$Element<*>,
}

declare module 'react-intl' {
  declare function addLocaleData(data: LocaleData | LocaleData[]): void;
  declare function defineMessages(messageDescriptors: MessageDescriptorMap): MessageDescriptorMap;
  declare function formatDate(value: any, options?: DateTimeFormatOptions & {format?: string}): string;
  declare function formatTime(value: any, options?: DateTimeFormatOptions & {format?: string}): string;
  declare function IntlProvider(): string;

  declare class FormattedMessage extends React$Component {
    props: FormattedMessageProps;
  }

  declare class FormattedNumber extends React$Component {
    props: FormattedNumberProps;
  }

  declare class FormattedDate extends React$Component {
    props: FormattedDateProps;
  }
}
