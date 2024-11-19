import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter.tsx';

function App(): ReactElement {
  return (
    <RouterProvider router={router} />
  );
}

export default App;