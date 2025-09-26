import type { FC, ReactElement } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Input } from "antd"

import type { IInputLoginProps } from './interface'


const InputLogin: FC<IInputLoginProps> = ({ size, placeholder }): ReactElement => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      prefix={<UserOutlined style={{ color: '#00000073' }} />}
      type='email'
    />
  )
}

export default InputLogin