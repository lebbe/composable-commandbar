# Composable CommandBar

[Can you spot the difference?](https://lebbe.github.io/composable-commandbar/)

I like components that are composable. That simply means, that you can put some components inside other components to build a GUI. The worst example I have found of components that are not composable, are the [Fluent UI CommandBar](https://developer.microsoft.com/en-us/fluentui#/controls/web/commandbar).

To build a simple Command Bar, it uses a single component CommandBar, and **136 lines** of javascript code, with objects and arrays, describing the command bar.

This has multiple downsides:

- You cannot use components from other libraries within the CommandBar.

- You cannot add features to the CommandBar that is not already supported in Fluent UI.

- The code is unnecesary complex and hard to read.

To combat this, I mad this simple repo as an example on how to do something identical, but by composing it with components instead. You can see the differences in plain sight, by comparing the files [FluentCommandBar.tsx](./FluentCommandBar.tsx) with [ComposableCommandBar.tsx](./ComposableCommandBar.tsx).

## Polymorphy

I also added a version where items are added to the overflow menu when screen size gets smaller. It is still composable, with the same
benefits as above, but where the items are composed of arrays of React Components, instead of going via the children prop.
