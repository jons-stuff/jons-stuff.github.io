---
title: React + Redux CMS
navigation: 1
---

# [Jon's Stuff](/)

**[<< View All Projects](/)**

-----

## React + Redux CMS (2018)

A 2018 React + Redux reboot of a commercial 2009 jQuery/PHP based CMS platform.

**[Live demo >>](/react-cms)** &nbsp; &nbsp;
**[Source on Github >>](https://github.com/jons-stuff/react-cms)**

![React-cms Screenshot](/assets/jpeg/react-cms.jpg)

### What is it?

This is an experimental React + Redux rebuild of a commercial CMS platform which has powered many websites since 2009. The original platform used a php backend with a jQuery based front-end.

The underlying code has been completely rewritten to use React and a modern front-end / REST api architecture (for demonstration purposes this project contains a simulated REST api with sample data).

Please note that the project still contains the original 2009 era html/css (it's not responsive and yes, at one point there are three levels of nested tables!) - it's hoped the markup will be modernised at some point.

### A mini CMS Framework

Most of the code in this project makes up the list and form building components used to build the various cms areas. The best approach for creating any kind of framework is to use relatively small composable components (making few assumptions and allowing plenty of scope for custom behaviour). Configuration and control flow should be relatively high in the hierarchy.

### List pages framework components

One challenge on the list pages is how to share common behaviour without building a one-size-fits-all list component. A good example of this is the row selection checkboxes in the left-hand column - although common, this functionality isn't present on all list pages and so it shouldn't be built into the core list component. This is a problem as the row selection checkboxes have stateful logic where the state must be accessible to other 'add-on' behaviours (for example the status setting buttons along the top need to know which rows are selected).

Redux is a great fit here as it provides a standard way to build re-usable stateful logic. The only problem is that the necessary Redux reducer/selectors/actions differ between lists and they also need to be bound to different parts of the Redux store. The solution was to create a `createListStateHandlers` function which creates the necessary Redux state management functions according to a given config. The `createListStateHandlers` function is called with a config object describing the required stateful list modules (for example the `rowSelection` and `status` modules) and returns a reducer, selectors plain object and actions plain object which can then be passed to other components. 

The following shows the `createListStateHandlers` in use for the [Vacancies list page](https://github.com/jons-stuff/react-cms/blob/master/src/App/Vacancies/VacancyListPage.js) (also note how the created selectors and actions are passed to the table column renderers making all dependencies explicit):

<script src="https://gist.github.com/jons-projects/55a131d9f340e7789c0e7194e5513231.js"></script>

And here it's being used on the much simpler [Log list page](https://github.com/jons-stuff/react-cms/blob/master/src/App/Log/LogListPage.js):

<script src="https://gist.github.com/jons-projects/e56236877bf03f1ee9c387aae5e286e4.js"></script>

### Form pages framework components

The form pages don't use Redux, instead they use standard React state management. Again the challenge is how to re-use the stateful logic - the approach used here is to extract as much common logic into wrapper components and injectable JavaScript functions.

One example of a wrapper component is the `<ItemLoader>` component. This component takes a Promise which loads an item from the api (the `loader` prop). On success it renders the form according to the given children render prop, on failure it shows an error screen. Here's the component in use: ([`<ItemLoader>` source here](https://github.com/jons-stuff/react-cms/blob/master/src/components/ItemLoader.js))

<script src="https://gist.github.com/jons-projects/0e06d2b43d53c58469500c3f588ad56a.js"></script>

Another example of logic re-use is the form validation components. The form validation architecture is simply a pure js function which takes a formData plain object (containing the values form the form's `<input>` fields) and returns a plain object of errors to display on the form. Various validator helper functions are used to compose the final form validator function. The functions which make up the validation framework can be found in [src/utilies/validation.js](https://github.com/jons-stuff/react-cms/blob/master/src/utilities/validation.js).

Example of a form validator being created and used:

<script src="https://gist.github.com/jons-projects/25ec47071a28def5db432fcb3dfafd4f.js"></script>

### React 16.7 'hooks' proposal

The recently announced [React 'hooks' proposal](https://reactjs.org/docs/hooks-intro.html) is designed to remove many of the current problems when creating reusable stateful logic (exactly the kinds of problems described above). It will be interesting to see how hooks can be applied to this project, hopefully removing the need for Redux and also allowing the handful of remaining class components to be converted to functional components.

### Further info on this project

**[Live demo >>](/react-cms)** &nbsp; &nbsp;
**[Full source on Github >>](https://github.com/jons-stuff/react-cms)**

**[<< See the rest of Jon's Stuff](/)**

&nbsp;