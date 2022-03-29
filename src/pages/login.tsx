import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { message, Space, Tabs } from 'antd';
import { FC } from 'react';
import styles from './login.module.less';
import { useImmer } from 'use-immer';
import {
  UserOutlined,
  MobileOutlined,
  LockOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';

/**
 * 登录类型
 */
type LoginType = 'phone' | 'account';

/**
 * 登录
 * @returns
 */
const Login: FC = () => {
  const [loginType, setLoginType] = useImmer<LoginType>('phone');

  /**
   * 手机号登录
   * @returns
   */
  const findPhoneLogin = () => (
    <>
      <ProFormText
        fieldProps={{
          size: 'large',
          prefix: <MobileOutlined className={'prefixIcon'} />,
        }}
        name="mobile"
        placeholder={'手机号'}
        rules={[
          {
            required: true,
            message: '请输入手机号！',
          },
          {
            pattern: /^1\d{10}$/,
            message: '手机号格式错误！',
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder={'请输入验证码'}
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} ${'获取验证码'}`;
          }
          return '获取验证码';
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: '请输入验证码！',
          },
        ]}
        onGetCaptcha={async () => {
          message.success('获取验证码成功！验证码为：1234');
        }}
      />
    </>
  );
  /**
   * 账号登录
   * @returns
   */
  const findAccountLogin = () => (
    <>
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={'prefixIcon'} />,
        }}
        placeholder={'用户名: admin or user'}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
        placeholder={'密码: ant.design'}
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
    </>
  );
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="Github"
        subTitle="全球最大同性交友网站"
        actions={
          <Space>
            其他登录方式
            <AlipayCircleOutlined className={styles.iconStyles} />
            <TaobaoCircleOutlined className={styles.iconStyles} />
            <WeiboCircleOutlined className={styles.iconStyles} />
          </Space>
        }
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
        </Tabs>
        {loginType === 'account' && findAccountLogin()}
        {loginType === 'phone' && findPhoneLogin()}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
