import Hint from '../ui-core/Hint';
import createComponent from '../react-themeable/createComponent';

// An example of making use of Elemental's global css classes.
const elementalTheme = {
  base: 'elemental-hint-wrapper',
  questionMark: 'elemental-hint-questionmark',
  visibleContent: 'elemental-hint-content',
  hiddenContent: 'elemental-hint-hidden-content',
};

export default createComponent(Hint, elementalTheme);
