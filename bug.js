In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This results in `useParams()` returning `undefined` because the hook relies on the routing context which is only available within route components.

```javascript
// Incorrect Usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // id will be undefined
  // ...
}
```