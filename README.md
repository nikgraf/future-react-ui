# A Playground to investigate a good third-party React UI Lib Architecture

My goal is to find an architecture which could be common ground a base for quality React UI libraries. A consistent theming/styling API would make the lives of many developers way more comfortable.

HELP/FEEDBACK/YOUR OPINION WANTED! :)

## How to setup & run

```
npm install
cd app
npm install
npm start
```

## Basic Ideas

#### Self-contained

Make components self contained (no global UI lib dependencies) so you can import them and avoid importing the whole library e.g.

```
// import the whole lib and get Toggle
import { Toggle } from 'ui-lib';

// just import toggle without importing the whole library
import Toggle from 'ui-lib/Toggle';
```

#### react-themeable

Leverage react-themeable. It's a nice way of providing many styling classes to a single component.
I believe establishing this as a convention would benefit the React community due the consistent API over many libs.

#### ClassName based

Component styles should be class based. It's more performant & responsive styling doesn't work with server-side rendering. I myself went down the inline-styles path in the past, but switched back to classes. A component using react-themeable could actually work with both (class-names & inline-styles), but I believe this is an unnecessary overhead. Your thoughts?

#### Ship without a theme

Ship without a global theme so people don't have to import the styling code. This might not be relevant to company internal or in general libraries that a opinionated about styling.

#### Global theming utility

Provide a simple & handy way to apply a global theme for all the imported components.

## Global Theming

While react-themeable is super useful I believe having a way to set a default styling is a crucial feature for a UI library. Most of the time you will use the default theme specific to your product. This avoids adding a lot of theme props through the whole application.

### Factory Pattern

https://github.com/nikgraf/future-react-ui/tree/master/ui-lib/Factory

In this version we assume there is a package which includes a completely unstyled version of the UI kits while there is a second one which takes all the needed components and return themed components buy leveraging a factory function.

```
/**
 * Returns a the provided component as themed component.
 *
 * Note: defaultProps could be useful for default special behavioural in
 * different ui libraries.
 */
export default (Component, theme, defaultProps) => (props) => {
  return <Component {...defaultProps} theme={theme} {...props} />;
};
```

For example these UI

#### Not themed kits & components

- material-ui-core (unstyled kit)
- belle-core (unstyled kit)
- elemental-core (unstyled kit)
- react-toolbox-core (unstyled kit)
- react-select (unstyled component)
- react-autocomplete (unstyled component)
- react-modal (unstyled component)

#### Themed UI kits

- material-ui (themed with material ui style and based on material-ui-core)
- belle (themed with belle style and based on belle-core)
- belle-flat (themed with a flat theme and based on belle-core)
- elemental (themed with the elemental theme and based on elemental-core)
- react-toolbox (themed with the material theme and based on react-toolbox-core)
- your-product-ui-lib (themed with your company style and based on belle-core[Toggle, Rating] & react-select & react-modal)
- your-friends-product-ui-lib (themed with their company style and based on react-select & react-modal & react-autocomplete)

Usage:
```
import Hint from 'elemental/Hint';

const customTheme = {
  questionMark: 'custom-class-for-question-mark-gold',
  visibleContent: 'custom-class-visible-content',
};

export default (props) => {
  return (
    <div>
      {/* Globally theme component */}
      <Hint />
      {/* Overwriting the theme locally for this case */}
      <Hint theme={theme}/>
    </div>
  );
};
```

### Other Global Theming Patterns

other patterns can be found here: https://github.com/nikgraf/future-react-ui/blob/master/global-theming.md

## Temporary Conclusion

While the Theme component based idea is pretty powerful the issues make me not like it as a default. For some time I was convinced that Module export or Static property would be one of the winners. Right now I'm pretty convinced the Factory Pattern is the clear winner. It is super flexible and allows people to create their own company UI kits. They can easily provide their own styling as well as set other props as default suited to their needs. Another benefit is that you can easily get started with prototyping by using an already style version (e.g. belle-flat) and replace it later with your custom product style.

If you have some ideas/feedback please reach out to me and let's discuss. (Github Issues might be best, but Twitter, Email, Skype, Hangout works as well)

## License

MIT
