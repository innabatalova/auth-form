import type { FC, ReactElement } from 'react'
import { Button } from "antd"

import type { IButtonAuthProps } from './interface'

const ButtonAuth: FC<IButtonAuthProps> = ({ size, type, text, disabled }): ReactElement => {
  return (
    <Button type={type} htmlType="submit" block size={size} disabled={disabled}>
      {text}
    </Button>
  )
}

export default ButtonAuth