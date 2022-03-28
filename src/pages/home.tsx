import { FC } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * 主页
 * @returns
 */
const Home: FC = () => (
  <div>
    我是主页 <Outlet />
  </div>
);

export default Home;
