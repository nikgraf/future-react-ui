import React from 'react';
import ReactDOM from 'react-dom';

import HintExample from './components/HintExample';
import HintJssExample from './components/HintJssExample';
import HintCssModulesExample from './components/HintCssModulesExample';

/* In this version each porperty of the importet theme can be overwritten. */
import Hint, { defaultTheme } from 'ui-lib/ModuleExport/Hint';
defaultTheme.questionMark = 'custom-class-for-question-mark-green';
defaultTheme.visibleContent = 'custom-class-visible-content';

/* In this variant the default theme can be overwritten by assigning a new object. */
import Hint2 from 'ui-lib/StaticProperty/Hint';
Hint2.theme = {
  questionMark: 'custom-class-for-question-mark-red',
  visibleContent: 'custom-class-visible-content',
};
/* It is also possible to just overwrite a single property. */
Hint2.theme.questionMark = 'custom-class-for-question-mark-red';

/* Context based theming */
import Hint3 from 'ui-lib/Context/Hint';
import Theme from 'ui-lib/Context/Theme';
const contextTheme = {
  hint: {
    questionMark: 'custom-class-for-question-mark-blue',
    visibleContent: 'custom-class-visible-content',
  },
};

/* Factory based theming
 * also see /ui-lib/Factory/belle/Hint or /ui-lib/Factory/elemental/Hint
 */
import Hint4Unstyled from '../ui-lib/Factory/ui-core/Hint';
import createComponent from '../ui-lib/Factory/react-themeable/createComponent';
const theme = {
  questionMark: 'custom-class-for-question-mark-gold',
  visibleContent: 'custom-class-visible-content',
};
const Hint4 = createComponent(Hint, theme);

window.React = React;

const App = () => {
  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      <h2>JSS styled</h2>
      <HintJssExample />
      <h2>CSS Modules styled</h2>
      <HintCssModulesExample />

      <br /><br />

      <h2>Unstyled (globally patched classNames)</h2>
      <h3>Global theme as module export</h3>
      <Hint>Basic closed hint without styling.</Hint>
      <Hint isOpen>Basic open hint without styling.</Hint>


      <h3>Global theme as static property</h3>
      <Hint2>Basic closed hint without styling.</Hint2>
      <Hint2 isOpen>Basic open hint without styling.</Hint2>


      <h3>Global theme as Theme component leveraging context</h3>
      <Theme theme={contextTheme}>
        <Hint3>Basic closed hint without styling.</Hint3>
        <Hint3 isOpen>Basic open hint without styling.</Hint3>
      </Theme>


      <h3>Factory to create Components with a provided Theme</h3>
      <Hint4>Basic closed hint without styling.</Hint4>
      <Hint4 isOpen>Basic open hint without styling.</Hint4>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('react'));
