import React, { ReactNode } from 'react';
import classNames from 'classnames';

const prefixCls = 'ship-timeline-item'

export type postType = 'left' | 'right'
export interface TimelineItemProps extends React.HTMLAttributes<HTMLElement> {
  /** 指定圆圈颜色 */
  color?: string;
  /** 自定义时间轴点 */
  dot?: ReactNode;
  /** 设置标签 */
  label?: ReactNode;
  /** 自定义节点位置 */
  position?: 'left' | 'right';
  isLast?: boolean;
  pending?: boolean;
}

/**
 * 垂直展示的时间流信息。
 * 
 * ```js
 * import { TimelineItem } from 'ship-ui'
 * ```
 */
export const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const { className, children, isLast, color, pending, position, dot, label, ...others } = props
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-last`]: isLast,
    [`${prefixCls}-pending`]: pending,
    [`${prefixCls}-${position}`]: position
  })
  const headClasses = classNames(`${prefixCls}-head`, `${prefixCls}-head-blue`, {
    [`${prefixCls}-head-custom`]: dot
  })
  const headStyle = {
    color: color,
    borderColor: color
  }
  console.log(position)
  return (
    <li className={classes} {...others}>
      { label && <div className={`${prefixCls}-label`}>{label}</div> }
      <div className={`${prefixCls}-tail`}></div>
      <div className={headClasses} style={headStyle}>
        {dot && <span className={classNames('anticon', { 'anticon-spin': pending })}>{dot}</span>}
      </div>
      <div className={`${prefixCls}-content`}>
        {children}
      </div>
    </li>
  )
}

TimelineItem.displayName = 'timelineItem'

export default TimelineItem;