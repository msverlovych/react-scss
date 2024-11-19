import { FC, Fragment, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from '../components';

const HomeLayout: FC = (): ReactElement => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main id="main">
        <Outlet />
      </main>
    </Fragment>
  )
}

export default HomeLayout