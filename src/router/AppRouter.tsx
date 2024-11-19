import { createBrowserRouter } from "react-router-dom";
import { Home, About, NotFound } from '../pages';
import HomeLayout from '../Layouts/HomeLayout.tsx';

export enum ERoutes {
  HOME = '/',
  ABOUT = '/about',
  UNKNOWN_PATH = '*'
}

export const router = createBrowserRouter([
  {
    path: ERoutes.HOME,
    element: <HomeLayout />,
    children: [
      {
        path: ERoutes.HOME,
        element: <Home />,
      },
      {
        path: ERoutes.ABOUT,
        element: <About />,
      },
      {
        path: ERoutes.UNKNOWN_PATH,
        element: <NotFound />
      }
    ],
  },
])