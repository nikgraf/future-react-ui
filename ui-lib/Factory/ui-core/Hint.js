import React from 'react';

// This file would be an example of an unstyled component which can be used if
// directly provided with a theme as an alternative to compose your custom UI kit
// with react-themeable's createComponent.
export default ({ children, isOpen = false, theme = {} }) => {
  return (
    <div className={theme.base}>
      <div className={theme.questionMark}>?</div>
      <div className={isOpen ? theme.visibleContent : theme.hiddenContent}>
        {children}
      </div>
    </div>
  );
};
