import React, { CSSProperties } from 'react';
import classNames from 'classnames';

const prefixCls = 'ship-divider';

export type orientationType = 'left' | 'right' | 'center';
export interface DividerProps {
  /** 分割线样式类 */
  className?: string;
  /** 是否虚线 */
  dashed?: boolean;
  /** 分割线标题的位置 */
  orientation?: orientationType;
  /** 文字是否显示为普通正文样式 */
  plain?: boolean;
  /** 分割线样式对象 */
  style?: CSSProperties;
  /** 水平还是垂直类型 */
  type?: 'horizontal' | 'vertical'
}

/**
 * 垂直展示的时间流信息。
 * 
 * ```js
 * import { Divider } from 'ship-ui'
 * ```
 */
export const Divider: React.FC<DividerProps> = (props) => {
  const { className, style, type, children, orientation, plain, dashed } = props
  const classes = classNames(prefixCls, className, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-text-${orientation}`]: orientation,
    [`${prefixCls}-with-text`]: children,
    [`${prefixCls}-plain`]: plain,
    [`${prefixCls}-dashed`]: dashed
  })
  return (
    <div
      className={classes}
      style={style}
    >
      <span className={`${prefixCls}-inner-text`}>{children}</span>
    </div>
  )
}

Divider.defaultProps = {
  type: 'horizontal',
  orientation: 'center'
}

export default Divider;