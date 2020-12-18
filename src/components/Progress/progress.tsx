import React from 'react';
import classNames from 'classnames';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * # 进度条
 * 展示操作的当前进度。
 * ```
 * import { Progress } from 'ship-ui'
 * ```
 */
export const Progress: React.FC<ProgressProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('nopconfirm', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Progress;