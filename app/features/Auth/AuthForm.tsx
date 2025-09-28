import type { FC, ReactElement } from 'react'
import { useState } from 'react'

import axios from 'axios'

import { Form, Button, Typography } from 'antd'
import type { FormProps } from 'antd'

import AuthStepOne from './components/authStepOne/authStepOne'
import AuthStepTwo from './components/authStepTwo/authStepTwo'
import type { FieldType, apiResultType } from './interface'

import { useUpdateEffect } from '~/hooks/useUpdateEffect'

import Logo from '~/shared/logo/Logo'
import Arrow from '~/assets/images/arrow.svg'

import styles from './Auth.module.css'


const AuthForm: FC = (): ReactElement => {
  const [form] = Form.useForm()

  // form data
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    authStepOne(values)
  }
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  //form values data
  const [inputValue, setInputValue] = useState<string>('')
  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  // button activity on state fields
  const [buttonActive, setButtonActive] = useState<boolean>(false)
  const handleValuesChange = (changedValues: FieldType, allValues: FieldType) => {
    const { login, password } = allValues
    setButtonActive(!!login && !!password)
  }

  //api data
  const initialStatus = {
    userAuth: {
      status: 0,
      message: ''
    }
  }

  const [apiResult, setApiResult] = useState<apiResultType>(initialStatus)
  const authStepOne = async (userData: FieldType) => {
    try {
      const response = await axios.post('/api/auth', userData)
      setApiResult(response.data)
    } catch (error: unknown) {
      throw new Error('Server error!')
    }
  }

  const [visibleSteps, setVisibleSteps] = useState<boolean>(true)
  const [visibleErrors, setVisibleErrors] = useState<boolean>(false)
  useUpdateEffect(() => {
    if (apiResult.userAuth.status === 200) {
      setVisibleErrors(false)
      setVisibleSteps(step => !step)
    } else if (apiResult.userAuth.status === 400 || apiResult.userAuth.status === 401 ||
      apiResult.userAuth.status === 500) {
      setVisibleErrors(true)
    } else {
      throw new Error('Unknown error!')
    }
  }, [apiResult])

  return (
    <Form
      form={form}
      name="auth"
      onValuesChange={handleValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ textAlign: 'center' }}
    >
      <Button className={styles.Arrow} style={{ border: 'none', outline: 'none', padding: 0 }}><img src={Arrow} alt="step" /></Button>
      <Logo alt='logo auth form' width={100} styles={{ marginTop: 20 }} />
      {visibleSteps ?
        <AuthStepOne inputValue={inputValue} handleInputChange={handleInputChange} buttonActive={buttonActive} /> :
        <AuthStepTwo />}
      {visibleErrors && <div style={{ textAlign: 'left' }}><Typography.Text type="danger">{apiResult.userAuth.message}</Typography.Text></div>}
    </Form>
  )
}

export default AuthForm