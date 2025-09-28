
import type { FC, ReactElement } from 'react'

import { Form } from "antd"

import TitleAuth from '../titleAuth/titleAuth'
import InputLogin from '../inputs/inputLogin.tsx/InputLogin'
import InputPassword from '../inputs/inputPassword/InputPassword'
import ButtonAuth from '../buttonAuth/buttonAuth'

import type { FieldType } from '~/features/Auth/interface'
import type { IAuthStepOneProps } from './interface'

const AuthStepOne: FC<IAuthStepOneProps> = ({ inputValue, handleInputChange, buttonActive }): ReactElement => {
    return (
        <>
            <TitleAuth level={3} text='Sign in to your account to continue' styles={{ marginBottom: 24 }} />
            <Form.Item<FieldType>
                name="login"
                rules={[{ required: true, message: 'Please input your login!' }]}
            >
                <InputLogin size='large' placeholder='Email' value={inputValue} onChange={handleInputChange} />
            </Form.Item>

            <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <InputPassword size='large' placeholder='Password' value={inputValue} onChange={handleInputChange} />
            </Form.Item>

            <Form.Item label={null}>
                <ButtonAuth size='large' type='primary' text='Log in' disabled={!buttonActive} />
            </Form.Item>
        </>
    )
}

export default AuthStepOne