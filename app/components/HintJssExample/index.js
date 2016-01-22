import React from 'react';
import Hint from 'ui-lib/StaticProperty/Hint';
import jss from 'jss';
import styles from './styles';

const styleSheet = jss.createStyleSheet(styles).attach();

const HintExample = () => {
  return (
    <div>
      <Hint theme={styleSheet.classes}>
        JSS styled closed hint.
      </Hint>

      <Hint theme={styleSheet.classes} isOpen>
        JSS styles open hint.
      </Hint>
    </div>
  );
};

export default HintExample;
