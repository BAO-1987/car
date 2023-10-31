import './functions/_pageHeight';
import './functions/_headerHeight';
import './functions/_headerScrollHide';
import './functions/_scrollBehaviour';

import Accordion from './functions/_accordeon.js';
[...document.querySelectorAll('details')].forEach(el => {
  new Accordion(el);
});
