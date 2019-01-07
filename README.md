## react-mobx-test

Two simple projects illustrating how to set up and deploy a simple React project using mobx with annotations.  One uses Bable 6 dependencies, the other uses Babel 7.

Each project is otherwise identical and includes:

* A simple React component with 2 tabs (using @material-ui/core)
* Annotations to mark mobx observerable, observer, and action
* Babel presets to transpile ES6, React, and mobx features
* Babel plug-in to transpile Javascript class properties
* Babel plug-in to transpile Javascript annotations
* Webpack configuration to run Babel loaders
* Webpack plug-in to create default HTML file from template
* jsconfig file to ignore experimental annotation warnings in IDE

### Setup

```
cd react-mobx-babel6
npm i
npm run start
```

```
cd react-mobx-babel7
npm i
npm run start
```