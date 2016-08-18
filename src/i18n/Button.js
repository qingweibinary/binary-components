import React from 'react';
import TranslatedComponent from './TranslatedComponent';

export default (props: any): React$Element<TranslatedComponent> =>
	<TranslatedComponent component="button" {...props} />;
