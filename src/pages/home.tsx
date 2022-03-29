import { FC, useEffect, useLayoutEffect } from 'react';
import { useImmer } from 'use-immer';
import { PageContainer, ProSettings, SettingDrawer } from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import defaultProps from './components/default-props';
import styles from './home.module.less';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { registerMicroApps, start } from 'qiankun';
import { DEFAULT_CONTAINER_ID, MicroApp } from './components/micro-app';

/**
 * 主页
 * @returns
 */
const Home: FC = () => {
  const [settings, setSetting] = useImmer<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useImmer('/welcome');

  /**
   * todo: only one
   */
  useEffect(() => {
    registerMicroApps(MicroApp);
    start();
  }, []);
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: String(import.meta.env.VITE_PRO_LAYOUT_WATERMARKPROPS),
        }}
        menuFooterRender={(props) => {
          return (
            <a
              className={styles.menuA}
              // href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              {!props?.collapsed && String(import.meta.env.VITE_PRO_LAYOUT_WATERMARKPROPS)}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          {/* 微应用 */}
          <div
            style={{
              height: '120vh',
            }}
            id={DEFAULT_CONTAINER_ID}
          ></div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};

export default Home;
