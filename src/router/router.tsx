import { AppRoutes } from '@enums/routes';
import { MainLayout } from '@features/layout';
import { TransportsPage } from '@pages/transports';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
  [
    {
      path: AppRoutes.HOME,
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: AppRoutes.TRANSPORTS_BY_CATEGORY,
          element: <TransportsPage />,
        },
      ],
    },
  ],
  { basename: '/test-cars' },
);
