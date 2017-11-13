# Pearson Elements-SDK

The Pearson Elements-SDK library contains a number of UI/UX interface elements that allow developers to develop applications using a consistent look and feel.  Elements-SDK is split into two separate sets of functionality.  

First are the CSS styles which allow the application to be developed according to the standards found at the [Pearson UI/UX design site](http://pearson-higher-ed.github.io/design/).  Any UI/UX piece which only requires styling can be found in the /src/styles directory.  This portion of the library is written exclusively in SASS and is transpiled at build time (either when Elements-SDK is built or when the SASS files are built by the consuming app).  

Second, are the JavaScript components which bring behaviors and programmatic functionality to the elements.  This components are a mix of SASS/CSS styling and JavaScript functionality.  Any UI/UX piece which requires both styling and functionality can be found in the /src/components directory.  Components found in this directory need to be imported into the application from the built distribution file found in /build/dist.compounds.js

The Pearson Elements-SDK is intended for developers to consume as much or as little as needed to get the job done.  

## Consuming this SDK

It is recommended that Elements-SDK be installed into the project using [npm](https://npmjs.org):

    npm install --save @pearson-components/elements-sdk

The installation provides both the dist files with minimized CSS and JavaScript code as well as the original source code, with required assets.  This allows the option for the consuming app to include the SDK as a static asset or as part of a build process.

To comment out any SCSS file so it's not added to the application's rendered CSS, open `src/styles/elements.scss` and use JavaScript-style commenting. Example:

```
    @import 'base/variables';

    //@import 'base/html-tags';

    @import 'elements/typography/font-face';
```

The above would prevent the `_html-tags.scss` styles from being transpiled into the application's CSS file.

Consuming the JavaScript components requires importing into a consuming app as follows:

Import a single component:

    import { Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';


Import all components:

    import * as Compounds from '@pearson-components/elements-sdk/build/dist.elements-sdk';
    const Button = Compounds.Button

or destructure as needed:

    import {
      Button,
      Icon,
      TextInput,
      Select
    } from '@pearson-components/elements-sdk/build/dist.elements-sdk';

### External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or available from a third-party [CDN](https://cdnjs.com/libraries/react/).

#### Polyfills

React components with internationalisation use React-Intl which relies on the ECMAScript Internationalisation API. This was not supported in Safari until version 10. If you are supporting Safari older than 10, there is a polyfill from Andy Earnshaw (see below).

CustomEvent support in IE is also polyfilled. Because many teams are supporting both IE 11 and Safari 9, we've combined the polyfills into a single script. The example below polyfills for CustomEvent and localisation for English and French:

```
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
```

Be sure to include the above script (a version of it that makes sense for your project and supported browsers) on your HTML page running CompoundsSDK, if you need it.


### Classes-only styling

If desired, Elements-SDK ships with a version that does not include any styling on plain HTML tags.  Simply include `build/css/elementsNoPlain.css`, or add the `/src/styles/elementsNoPlain.scss` file to the project.

When using the ElementsNoPlain stylesheet, the (r)em-based sizing of page elements will differ from pages using the `elements.css` unless the consuming app is able to set the class `the class `pe-base-fontsize` on the html, body, or first main container of the page. To get the Open Sans font stack, use the `pe-fontstack` class. Basic chunks of text (or their containers) can use the `pe-copy` class to regulate font-size, line-height, and text color.

Using various Elements-SDK classes without the base settings for font-size, font-family, line-hieght and color will leave consuming apps with results that differ from other pages styled by `elements.css` (which may be desired).


### Important: Fonts and Icons

Pearson Elements-SDK looks for the /fonts and /icons folders at the root of the served application. Copy the npm-installed /build/fonts and /build/icons to the correct location on the application's web server, and ensure the application is set up to allow the font files to download correctly and not filter out the response header Content Type (i.e. 'application/x-font-ttf') so the fonts may be rendered in the browser.

#### Internet Explorer

Some caching headers will prevent Internet Explorer from showing font files after a refresh. The culprits are `Cache-control: no-store` and on https `Pragma: no-cache`. The Vary header may also interfere with caching in IE.

#### Icons

Pearson Elements-SDK uses an SVG sprite for icons (the Pearson logos are two separate SVG files, not part of the sprite). The sprite file is found in `/build/icons/` in Elements-SDK, and should be copied to the appropriate place, as mentioned above, on the application's web server. In additiona, to support Internet Explorer and some versions of Android where the default-Chrome browser is actually webkit, that SVG sprite must be present on the application's page. See <a href="http://pearson-higher-ed.github.io/elements/elements/icons/">the icons page</a> under "Two methods of including icons" for examples of getting this sprite on your application page. Additionally, there are instructions on that page for how to add new icons.

## Contributions

Please review the [guidelines](https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md) for contributing before getting started.

[Git](https://git-scm.com/downloads) must be installed.
[Node.js](https://nodejs.org/en/) v4 must be installed (QA testing will target even numbered Node versions, specifically 4 and 6).

Windows users will need the following additional steps:

1. Install Ruby as the runtime engine for SCSS.
2. Install [Python 2.7](https://www.python.org/downloads/). Some node modules may rely on node-gyp, which requires Python on Windows.

Clone the project and install the dependencies and build the library:

    git clone https://github.com/Pearson-Higher-Ed/elements.git
    cd elements
    npm install
    npm run build

Verify everything worked correctly:

    npm start

Then navigate to localhost:8081/compounds and click on the items on the page.

### Adding Icons

See <a href="http://pearson-higher-ed.github.io/elements/elements/icons/">the icons documentation</a> under "Adding new icons" for the process of adding a new icon.

### Build the Documentation

Contibutors adding wholly new components to Elements-SDK (which have been already approved by UX design), in addition to writing all CSS and/or JavaScript for the component, will also need to add a new component page to the docs.

The documentation/demo website (which is bundled with the source code for Pearson Elements-SDK) is found in the /demo directory.

To add something new to the docs:
- Create a file called <item-name>Page.js to the /demo/demoPages/components directory.  If the item consists of styles only, please add a file named Styles<item-name>Page.js to the /demo/demoPages/styles directory.  Please follow the patterns used by the other items in the respective directories to build out the structure of the page.
- Open /demo/demoPages/HeaderPage.js and add the new item to the list according to the pattern of the other items on the page.
- Open /demo/demoPages/HomePage.js and add the new item to the appropriate list according to the pattern of the oter items on the page.
- Open /demo/demoRouter.js and import the new page created in the first step.  Then add the new page to the router code found further down the file.
- Save all files, rebuild, and start the demo app.

The new component's document page should:
- have some explanation of what the purpose of the element or component is
- have some example HTML (wrapped in demo tags, you can show both the rendered in-browser version as well as the actual HTML code in one go) for other developers to see where to best add Elements classes
- demonstrate some of the component's functionality (if a JavaScript component)
- have any special use notes if needed, such as accessibility or browser support gotchas

### Test

The project is wired to unit test with Jest, "expect" assertion library, and expect-jsx to turn React
elements into formatted strings.

    npm test

### QA Testing

QA may use the event harness to instantiate a component for testing using this format:
```
  document.body.dispatchEvent(new CustomEvent('o.InitCompounds', {
    detail: {
      elementId     : 'app',
      componentName : 'Button',
      props         : {
                       btnType :'primary',
                       btnSize :'xlarge',
                       children:'hi there'
                      }
    }
  }));
```



## Element Design Document Version

List of Elements with their current respective design version:

( <a href="http://pearson-higher-ed.github.io/design/">Design Document Site</a> )

| Element | Current Design Version |
|---------|------------------------|
| Typography | v2.0.0 |
| Color | v2.1.0 |
| Icons | v2.3.0 |
| Buttons | v3.0.0 |
| Inputs | v2.0.1 |
| Grid | v1.0.0 |
| Presentation Strategies | v1.0.0 |
| Templates | v2.0.0-beta.2 |
| Responsive Utilities (Breakpoints) | v1.0.0 |
| Forms | v1.0.0-beta.3 |


** Developers should update table as they implement new versions...*

## Guidelines

All submissions must be via pull request and approved before the pearson-design-accelerator@pearson.com team will merge
and allow it to enter the release process. All submissions must pass this project's linting, test with 80% code coverage or greater,
and be compatible with the version(s) of React approved for the Pearson User Experience Platform.

## Acknowledgements

This project was inspired by other popular front-end frameworks published under the MIT license:

- [Bootstrap](https://getbootstrap.com) copyright 2011-2017 Twitter, Inc.
- [Foundation](http://foundation.zurb.com/) copyright 2017 ZURB, inc.

## License

Copyright 2017 Pearson Education.
