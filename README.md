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

#### Class based

Component styles should be class based. It's more performant & responsive styling doesn't work with server-side rendering. I myself went down the inline-styles path in the past, but switched back to classes. Your thoughts?

#### react-themeable

Leverage react-themeable. It's a nice way of providing many styling classes to a single component.
I believe establishing this as a convention would benefit the React community due the consistent API over many libs.

#### Self-contained

Make components self contained (no global UI lib dependencies) so you can import them and avoid importing the whole library e.g.

```
// import the whole lib and get Toggle
import { Toggle } from 'ui-lib';

// just import toggle without importing the whole library
import Toggle from 'ui-lib/Toggle';
```

#### Ship without a theme

Ship without a global theme so people don't have to import the styling code. This might not be relevant to company internal or in general libraries that a opinionated about styling.

#### Global theming utility

Provide a simple & handy way to apply a global theme for all the imported components.

## Global Theming

While react-themeable is super useful I believe having a way to set a default styling is a crucial feature for a UI library. Most of the time you will use the default theme specific to your product. This avoids adding a lot of theme props through the whole application.

#### Module export

https://github.com/nikgraf/future-react-ui/tree/master/ui-lib

In this version the defaultTheme is exported through a named module export. On line 9, 10, 11 you can see how the default theme is patched with custom classes. (https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L8) Since this is not so hand it might be useful to have utility function for each library to apply a theme.

#### Static property

https://github.com/nikgraf/future-react-ui/blob/master/ui-lib/StaticProperty/Hint.js

In this version the defaultTheme is attached to the component itself as static property. Compared to the 'Module export' this is a bit more flexible as you can overwrite the whole `theme` object in one go. See line 13-20 for usage. (https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L13)

#### Theme Component leveraging Context

https://github.com/nikgraf/future-react-ui/blob/master/ui-lib/Context/Hint.js

In this version we leverage context to build a `<Theme />` component that takes a theme as property and passes it down to all child components via React's context. A theme is still a simple JS object as can be seen on line 25-30. (https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L22). See how it's used here: https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L56. On one hand this approach is powerful, because you can apply different themes various nesting levels in the render tree.

```
<Theme theme={baseTheme}>
  <Theme theme={headerTheme}>
    <Menu items=['Home', 'About'] />
  </Theme>
  <Hint isOpen>Basic open hint without styling.</Hint>
</Theme>
```

There is one obvious concern with this approach. There could be name-clashing between libraries that use the same key in the `theme` object. This could be solved by following a namespace convention like prefixing the keys with the npm package name.

## Temporary Conclusion

While the Theme component based idea is pretty powerful it's issues make me not having this as a default way of doing things. I'm not sure if there are some up/downsides between Module export vs Static property, but currently I'm leaning more to the static property implementation. If you have some ideas/feedback please reach out to me and let's discuss. (Github Issues might be best, but Twitter, Email, Skype, Hangout works as well)

## License

MIT
