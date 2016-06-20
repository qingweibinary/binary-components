import { configure } from '@kadira/storybook';

configure(() => {
    require('./inputs');
    require('./i18n');
    require('./graphical');
    require('./misc');
}, module);
