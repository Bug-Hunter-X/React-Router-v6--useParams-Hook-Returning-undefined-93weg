# React Router v6: useParams Hook Returning undefined

This repository demonstrates a common error when using the `useParams` hook in React Router v6 and provides a solution.

The problem arises when attempting to access route parameters outside of a component directly rendered within a route definition.  The `useParams` hook needs to be within the scope of a component that is rendered by the routing context.

The `bug.js` file showcases the incorrect usage, while `bugSolution.js` demonstrates the correct way to access the parameters.

## Solution

Ensure the `useParams` hook is used within a component that's rendered by a route, either directly or indirectly.