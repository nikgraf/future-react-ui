import React from 'react';

export const defaultTheme = {
  base: undefined,
  questionMark: undefined,
  visibleContent: undefined,
  hiddenContent: undefined,
};

const Hint = ({ children, isOpen = false, theme = defaultTheme }) => { // eslint-disable-line no-shadow
  return (
    <div className={theme.base}>
      <div className={theme.questionMark}>?</div>
      <div className={isOpen ? theme.visibleContent : theme.hiddenContent}>
        {children}
      </div>
    </div>
  );
};

export default Hint;
