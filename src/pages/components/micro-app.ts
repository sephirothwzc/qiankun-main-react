import shared from '@/qiankun/shared';

/**
 * 类型
 */
export type MicroAppType = {
  /**
   * 微服务名称
   */
  name: string; // app name registered
  /**
   * url ://localhost:7100
   */
  entry: string;
  /**
   * 容器id :#yourContainer
   */
  container: string;
  /**
   * rule : /yourActiveRule
   */
  activeRule: string;
  /**
   * 参数
   */
  props: any;
};

/**
 * 默认 container
 */
export const DEFAULT_CONTAINER_ID = 'appPageContainer';

/**
 * 注册主应用
 */
export const MicroApp: Array<MicroAppType> = [
  {
    /**
     * 数字化营销
     */
    name: 'digital-marketing', // app name registered
    entry: String(import.meta.env.VITE_DIGITAL_MARKETING),
    container: `#${DEFAULT_CONTAINER_ID}`,
    activeRule: '/digital-marketing',
    // 通过 props 将 shared 传递给子应用
    props: { shared },
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
];
