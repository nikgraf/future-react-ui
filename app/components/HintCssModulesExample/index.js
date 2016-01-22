import React from 'react';
import Hint from 'ui-lib/StaticProperty/Hint';
import styles from './styles.css';

const HintExample = () => {
  return (
    <div>
      <Hint theme={styles}>
        CSS Modules styled closed hint.
      </Hint>

      <Hint theme={styles} isOpen>
        CSS Modules styles open hint.
      </Hint>
    </div>
  );
};

export default HintExample;
