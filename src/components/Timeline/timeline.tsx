import React from 'react';
import classNames from 'classnames';

export interface TimelineProps extends React.HTMLAttributes<HTMLElement>{

}

/**
 * 垂直展示的时间流信息。
 * ```
 * import { Timeline } from 'ship-ui'
 * ```
 */
export const Timeline: React.FC<TimelineProps> = (props) => {
  const {className, ...others} = props
  const classes = classNames('timeline', className, {

  })
  return (
    <div className={classes} {...others}></div>
  )
}

export default Timeline;