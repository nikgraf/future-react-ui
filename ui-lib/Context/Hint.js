import React from 'react';

const Hint = ({ children, isOpen = false, theme }, context) => {
  const currentTheme = theme ? theme : context.theme.hint;
  return (
    <div className={currentTheme.base}>
      <div className={currentTheme.questionMark}>?</div>
      <div className={isOpen ? currentTheme.visibleContent : currentTheme.hiddenContent}>
        {children}
      </div>
    </div>
  );
};

Hint.contextTypes = { theme: React.PropTypes.object };

export default Hint;
