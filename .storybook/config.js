import { configure } from '@kadira/storybook';

configure(() => {
    require('./inputs');
    require('./translated');
    require('./graphical');
    require('./misc');
}, module);
