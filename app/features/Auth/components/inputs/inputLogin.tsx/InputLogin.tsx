import type { FC, ReactElement } from 'react'

import { UserOutlined } from '@ant-design/icons'
import { Input } from "antd"

import type { IInputLoginProps } from './interface'


const InputLogin: FC<IInputLoginProps> = ({ size, placeholder, value, onChange }): ReactElement => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value)
  }

  return (
    <Input
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      prefix={<UserOutlined style={{ color: '#00000073' }} />}
      type='email'
    />
  )
}

export default InputLogin