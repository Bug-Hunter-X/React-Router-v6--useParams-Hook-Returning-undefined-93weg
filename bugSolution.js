```javascript
// Correct Usage
import { useParams } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // id will be defined
  // ...
}

function MyRoute() {
    let element;
    let routes = useRoutes([
        {
            path: '/:id',
            element: <MyComponent/>,
        },
    ]);

    return routes;
}
```