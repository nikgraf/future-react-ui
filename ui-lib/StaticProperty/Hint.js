import React from 'react';

const Hint = ({ children, isOpen = false, theme = Hint.theme }) => {
  return (
    <div className={theme.base}>
      <div className={theme.questionMark}>?</div>
      <div className={isOpen ? theme.visibleContent : theme.hiddenContent}>
        {children}
      </div>
    </div>
  );
};

Hint.theme = {
  base: undefined,
  questionMark: undefined,
  visibleContent: undefined,
  hiddenContent: undefined,
};

/* Alternative class based implementation */

// class Hint extends React.Component {
//
//   static theme = {
//     base: undefined,
//     questionMark: undefined,
//     visibleContent: undefined,
//     hiddenContent: undefined,
//   };
//
//   render() {
//     const {children, isOpen = false, theme = Hint.theme} = this.props;
//     return (
//       <div className={theme.base}>
//         <div className={theme.questionMark}>?</div>
//         <div className={isOpen ? theme.visibleContent : theme.hiddenContent}>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// };

export default Hint;
