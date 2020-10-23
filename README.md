## Crown Cloathing

---

This is a E-Commerce Application UI based on React component.

<br/>

### Commands for Start Project

---

`npm install`
<br/>
`npm start`

### Packages

---

- [node-sass](https://www.npmjs.com/package/node-sass) `Package used to support sass styles sheet in node project`
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) `Packge used to add Routing feature in React Project`
- [firebase](https://www.npmjs.com/package/firebase) `Package to support Google Firebase releated stuff in React / Javascript`
- [redux-logger](https://www.npmjs.com/package/redux-logger) `Logging Readux Action and events`
- [react-redux](https://www.npmjs.com/package/react-redux) `Supporting package for react to use redux in application`
- [readux](https://www.npmjs.com/package/redux) `Package used for statemanagement`
- [reselect](https://www.npmjs.com/package/reselect) `Package for Redux selector`
- [redux-persist](https://www.npmjs.com/package/redux-persist) `Package used for store redux state in localstorage of webBrowser.`
- [react-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout) `Package to support stripe payments in React.`
- [styled-component](https://www.npmjs.com/package/styled-components) `Pcakge to support Style component which help us to narrow down css global class scoping`

### Additional Concepts

- [Importing SVG in React](https://create-react-app.dev/docs/adding-images-fonts-and-files/) <br/>
  This article show that how to import png's and svg's in React comonent in better way.
- React additional libraries.

  - [REACT 360](https://facebook.github.io/react-360/)
  - [REACT-BLESSED](https://github.com/Yomguithereal/react-blessed)
  - [REACT-DESKTOP](https://reactdesktop.js.org/)
  - [UTF-8 Dingbats](https://www.w3schools.com/charsets/ref_utf_dingbats.asp) Standers for rnders HTML
  - [BEM](http://getbem.com/) Project for making css class unique through out the application

- To Test `STRIPE` test card :credit_card: based on date please click on [here](https://stripe.com/docs/testing#cards) to know about

## Deployment

Deploying react project in **_ Heroku _** please follow the below commands

> heroku login <br/> <br/>
> heroku create `<project-name>` --buildpack https://github.com/mars/create-react-app-buildpack.git <br/><br/>
> git push heroku master

## Notes and Discusson

- V#No:129 (Dispatch Action Shorthand) - Why Dispatch available in connect why we do not write mapToDispatch in this case.

### Patterns and Practices

- **_ HOC _** `(Higher Order Component )` Pattern used i used for implmenting spinner in while calling async backend api from firebase.
