import React from 'react';
import classNames from 'classnames';

export interface RateProps extends React.HTMLAttributes<HTMLElement>{
  
}

/**
 * 评分组件。
 * 
 * ```js
 * import { Rate } from 'ship-ui'
 * ```
 */
export const Rate: React.FC<RateProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('rate', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Rate;