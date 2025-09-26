import type { FC, ReactElement } from 'react'

import type { ILogoProps } from './interface'

import LogoImg from "~/assets/images/logo.svg"


const Logo: FC<ILogoProps> = ({ alt, width, styles }): ReactElement => {
  return (
    <img
      width={width}
      alt={alt}
      src={LogoImg}
      style={styles}
    />
  )
}

export default Logo