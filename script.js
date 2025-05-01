/*What is react?
open source library for building user interfaces
Not a framework 
focus on UI
Rich ecosystem

Why learn React?
Created and maintained by Facebook 
More than 100k starts on Github
Huge community 
In demand skillset

Component Based Architecture

Resuable code

React is declarative
tell React what you want and React will build the actual UI
React will handle efficiently updating and rendering of the components
DOM updates are handle gracefully in React

More on why REAcT?
Seamlessly integrate react into any of your application
Portion of your page a complete page or even an entire application itself 
React native for mobile applications

Prerequistes
HTML,CSS and Javascript fundamentals
ES6
JavaScript - 'this' keyword , filter, map and reduce
ES6 - let & const , arrow function , template literals , default parameters , object literals , rest and spread operators and destructuring assignment.


Create-react-app
There are 2 ways to crate a  react-app

1. npx 
npx create-react-app <project_name>
npx is a npm package runner which get install when you install node 

2. npm 
npm install create-react-app -g
create-react-app<project_name>

Component Types
1. Statless Function Component
javaScript Function 
ex.
function Welcome(props){
return <h1>Hello, {props.name}</h1>};

2.Stateful Class Component
Class extending Component class
Render method returning HTML
ex.
class Welcome extends React.Component {
render(){
  return <h1>Hello, {this.props.name}</h1>;
  }
}

Components Summary
Components describe a part of the user interface
They are re-usable and can be nested inside other components 
Two Types - 
  Stateless Function Components
  Statefull Class Components

Difference between Funcion and class components

functional
  Simple function 
  Use func components as much as possible 
  Absence of 'this' keyword
  Solution without using state
  Mainly responsible for the UI
  Stateless/ Dumb/ Presentational

Class
  More feature rich
  Maintain their own private data - state
  Complex UI logic 
  Provide lifecycle hooks
  Stateful/ Smart/ Container

Hooks
  No breaking changes.
  Completely opt-in & 100% backwards-compatible
  What even we've learned so far in this series still holds good
  Component types - Functional components and Class components.
  Using state, lifecycle methods and 'this' binding.

JSX
  JavaScript XML (JSX)- Extension to the JavaScript language syntax.
  Write XML - like code for elements and components.
  JSX tags have a tag name , attributes , and children.
  JSX is not a necessity to write React applications.
  JSX makes your react code simpler and elegant.
  JSX ultimately transpiles to pure JavaScript which is understood by the browsers. 

*/