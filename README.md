# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by unintentionally causing a re-render within the effect itself.

## Problem

The `bug.js` file contains a component that uses `useEffect` to update state.  However, because the dependency array is empty (`[]`), the effect runs after every render.  This leads to a never-ending cycle of state updates and re-renders.

## Solution

The `bugSolution.js` file corrects this by adding `count` to the dependency array.  Now, the effect only runs when the `count` value changes, preventing the infinite loop.  This is a crucial aspect of properly managing state updates and side effects within React components.

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install necessary dependencies.
3. Run `npm start` to start the development server. Observe the error in the console for `bug.js` and the correct behavior in `bugSolution.js`.