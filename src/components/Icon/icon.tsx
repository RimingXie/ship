import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** 设置icon主题 */
  theme?: ThemeProps,
  /** 设置Icon */
  icon: IconName
}
/**
 * 语义化的矢量图形。使用图标组件 <br />
 * 采用 fontawesome 图标库 <br />
 * 点击 https://fontawesome.com/icons?d=gallery&s=solid&m=free 查看更多<br />
 * ``` 
 *  import {Icon} from 'ship-ui'
 * ```
 */
export const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon;