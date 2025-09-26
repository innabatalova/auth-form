import type { FC, ReactElement } from 'react'

import { LockOutlined } from '@ant-design/icons'
import { Input } from "antd"

import type { IInputPasswordProps } from './interface'


const InputPassword: FC<IInputPasswordProps> = ({ size, placeholder, visibilityToggle = false }): ReactElement => {
  return (
    <Input.Password
      size={size}
      placeholder={placeholder}
      prefix={<LockOutlined style={{ color: '#00000073' }} />}
      visibilityToggle={visibilityToggle} />
  )
}

export default InputPassword