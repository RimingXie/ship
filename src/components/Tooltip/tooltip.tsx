import React from 'react';
import classNames from 'classnames';

export interface TooltipProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 简单的文字提示气泡框。
 * ```
 * import { Tooltip } from 'ship-ui'
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('tooltip', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Tooltip;