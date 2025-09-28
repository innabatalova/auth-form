import type { FC, ReactElement } from 'react'

import { LockOutlined } from '@ant-design/icons'
import { Input } from "antd"

import type { IInputPasswordProps } from './interface'


const InputPassword: FC<IInputPasswordProps> = ({ size, placeholder, visibilityToggle = false, value, onChange }): ReactElement => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value)
  }

  return (
    <Input.Password
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      prefix={<LockOutlined style={{ color: '#00000073' }} />}
      visibilityToggle={visibilityToggle} />
  )
}

export default InputPassword