#### Module export

https://github.com/nikgraf/future-react-ui/tree/master/ui-lib

In this version the defaultTheme is exported through a named module export. On line 9, 10, 11 you can see how the default theme is patched with custom classes. (https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L8) Since this is not so hand it might be useful to have utility function for each library to apply a theme.

#### Static property

https://github.com/nikgraf/future-react-ui/blob/master/ui-lib/StaticProperty/Hint.js

In this version the defaultTheme is attached to the component itself as static property. Compared to the 'Module export' this is a bit more flexible as you can overwrite the whole `theme` object in one go. See line 13-20 for usage. (https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L13)

#### Theme Component leveraging Context

https://github.com/nikgraf/future-react-ui/blob/master/ui-lib/Context/Hint.js

In this version we leverage context to build a `<Theme />` component that takes a theme as property and passes it down to all child components via React's context. A theme is still a simple JS object as can be seen on line 25-30. (https://github.com/nikgraf/future-react-ui/blob/master/app/index.js#L22). On one hand this approach is powerful, because you can apply different themes various nesting levels in the render tree.

```
<Theme theme={baseTheme}>
  <Theme theme={headerTheme}>
    <Menu items=['Home', 'About'] />
  </Theme>
  <Hint isOpen>Basic open hint without styling.</Hint>
</Theme>
```

There is one obvious concern with this approach. There could be name-clashing between libraries that use the same key in the `theme` object. This could be solved by following a namespace convention like prefixing the keys with the npm package name.
