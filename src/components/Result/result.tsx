import React from 'react';
import classNames from 'classnames';

export interface ResultProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * # Result结果
 * 用于反馈一系列操作任务的处理结果。
 * ```
 * import { Result } from 'ship-ui'
 * ```
 */
export const Result: React.FC<ResultProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('result', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Result;