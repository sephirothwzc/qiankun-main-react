import { ConfigProvider, Spin } from 'antd';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.less';
import zhCN from 'antd/lib/locale/zh_CN';
import Login from './pages/login';
import Home from './pages/home';
import Error404 from './components/error/404';
import 'antd/dist/antd.less';
import '@ant-design/pro-form/dist/form.less';

function App() {
  return (
    <ConfigProvider csp={{ nonce: 'YourNonceCode' }} locale={zhCN}>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <div className={styles.example}>
                  <Spin size="large" />
                </div>
              }
            >
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className={styles.example}>
                  <Spin size="large" />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className={styles.example}>
                  <Spin size="large" />
                </div>
              }
            >
              <Error404 />
            </Suspense>
          }
        />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
