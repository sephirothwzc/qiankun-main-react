import { Maybe } from '@/utils/type-helper';
import { LazyExoticComponent } from 'react';

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
