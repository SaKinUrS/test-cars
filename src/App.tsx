import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { LoadingPage } from '@pages/loading';

function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
