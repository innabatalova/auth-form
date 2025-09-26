import type { FC, ReactElement } from 'react'
import { Typography } from 'antd'

import type { ITitleAuthProps } from './interface'


const TitleAuth: FC<ITitleAuthProps> = ({ level, text, styles }): ReactElement => {
  return (
    <Typography.Title
      level={level}
      style={styles}>
      {text}
    </Typography.Title>
  )
}

export default TitleAuth