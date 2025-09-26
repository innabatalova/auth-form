import { Form } from 'antd'
import type { FormProps } from 'antd'

import TitleAuth from './components/titleAuth/titleAuth'
import InputLogin from './components/inputs/inputLogin.tsx/InputLogin'
import InputPassword from './components/inputs/inputPassword/InputPassword'
import ButtonAuth from './components/buttonAuth/buttonAuth'

import Logo from '~/shared/logo/Logo'

const AuthForm = () => {
  type FieldType = {
    login?: string
    password?: string
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="auth"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ textAlign: 'center' }}
    >
      <Logo alt='logo auth form' width={100} styles={{ marginTop: 20 }} />
      <TitleAuth level={3} text='Sign in to your account to continue' styles={{ marginBottom: 24 }} />
      <Form.Item<FieldType>
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <InputLogin size='large' placeholder='Email' />
      </Form.Item>
      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <InputPassword size='large' placeholder='Password' />
      </Form.Item>
      <Form.Item label={null}>
        <ButtonAuth size='large' type='primary' text='Log in' disabled={true} />
      </Form.Item>
    </Form>
  )
}

export default AuthForm