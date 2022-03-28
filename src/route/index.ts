import { Maybe } from '@/utils/type-helper';
import { lazy, LazyExoticComponent } from 'react';

/**
 * router type
 */
export type RouteType = {
  path: string;
  name: string;
  icon?: string;
  /**
   * 默认
   */
  indexRoute?: Maybe<LazyExoticComponent<React.FC<{}>>>;
  component?: LazyExoticComponent<React.FC<{}>>;
  childRoutes?: Maybe<Array<RouteType>>;
};

/**
 * 路由
 */
export const routeConfig: Array<RouteType> = [
  {
    path: '/idea/list',
    name: 'idea',
    icon: 'smile',
    component: lazy(() => import('../views/idea/list')),
  },
];
