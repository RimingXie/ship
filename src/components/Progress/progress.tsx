import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Line, Circle } from 'rc-progress'
import Icon from '../Icon';

const prefixCls = 'ship-progress'

export type statusType = 'success' | 'exception' | 'normal' | 'active'
export type ProgressType = 'line' | 'circle' | 'dashboard'
export type ProgressSize = 'default' | 'small';
export type PositionType = 'top' | 'bottom' | 'left' | 'right'
export type StringGradients = { [percentage: string]: string };
type FromToGradients = { from: string; to: string };
export type ProgressGradient = { direction?: string } & (StringGradients | FromToGradients);

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  /** 内容的模板函数 */
  format?: (percent?: number, successPercent?: number) => React.ReactNode;
  /** 百分比 */
  percent?: number;
  /** 是否显示进度数值或状态图标 */
  showInfo?: boolean;
  /** 状态，可选：`success` `exception` `normal` `active`(仅限 line) */
  status?: statusType;
  /** 进度条的色彩 */
  strokeColor?: string | ProgressGradient;
  /** 进度条的样式 */
  strokeLinecap?: 'butt' | 'square' | 'round';
  /** 未完成的分段的颜色 */
  trailColor?: string;
  /** 类型，可选 `line` `circle` `dashboard` */
  type?: ProgressType;
  /** `type="line"` 进度条线的宽度，单位 px */
  strokeWidth?: number;
  /** 进度条画布宽度，单位 px */
  width?: number;
  /** 进度条的尺寸 */
  size?: ProgressSize;
}

const CircleColors: any = {
  success: '#52c41a',
  exception: '#ff4d4f',
  normal: '#1890ff',
  active: '#1890ff',
}

/**
 * # 进度条
 * 展示操作的当前进度。
 * 
 * ```js
 * import { Progress } from 'ship-ui'
 * ```
 */
export const Progress: React.FC<ProgressProps> = (props) => {
  const { className, type, percent = 0, strokeWidth, status, showInfo, size, width, format } = props;
  const bgHeight = strokeWidth ? strokeWidth : size === 'small' ? 6 : 8;
  let copyStatus = status;
  if (showInfo && percent! >= 100) {
    copyStatus = 'success'
  }
  const classes = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    `${prefixCls}-status-${copyStatus}`,
    `${prefixCls}-${size}`,
    {
      [`${prefixCls}-show-info`]: showInfo,
    },
    className
  )
  const getInfoContent = () => {
    if (status === 'exception') {
      return (
        <span className="anticon anticon-close-circle">
          { type === 'line' ? <Icon icon="times-circle" /> : <Icon icon="times" />}
        </span>
      )
    }
    if (percent! >= 100 && !format) {
      return (
        <span className="anticon anticon-close-circle">
          { type === 'line' ? <Icon icon="check-circle" /> : <Icon icon="check" />}
        </span>
      )
    }
    console.log(format)
    const formatText = format ? format(percent, 100) : `${percent}%`
    return formatText
  }
  const getInfoComponent = () => {
    if (!showInfo) {
      return
    }
    return (
      <span className={`${prefixCls}-text`} title={`${percent}%`}>
        { getInfoContent()}
      </span>
    )
  }
  const getComponent = () => {
    let element: ReactNode;
    if (type === 'line') {
      element =
        <>
          <div className={`${prefixCls}-outer`}>
            <div className={`${prefixCls}-inner`}>
              <div className={`${prefixCls}-bg`} style={{ width: `${percent || 0}%`, height: `${bgHeight}px` }}></div>
            </div>
          </div>
          { getInfoComponent()}
        </>
    } else {
      element =
        <div
          className={`${prefixCls}-inner`}
          style={{
            width: width || 120,
            height: width || 120,
            fontSize: width ? `${width / 5}px` : 24
          }}>
          <Circle
            strokeLinecap={props.strokeLinecap}
            prefixCls={prefixCls}
            percent={percent}
            strokeWidth={bgHeight}
            strokeColor={CircleColors[copyStatus!]}
            trailColor="#f5f5f5"
            trailWidth={bgHeight}
          />
          {getInfoComponent()}
        </div>
    }
    return element
  }
  return (
    <div className={classes}>
      {getComponent()}
    </div>
    // <div className={classes} {...others}>
    //   <Line prefixCls={prefixCls} percent={10} strokeWidth={4} strokeColor="#FF0000" trailColor="#00FF00" trailWidth={4} />
    //   <Circle prefixCls={prefixCls} percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
    // </div>
  )
}

Progress.defaultProps = {
  type: 'line',
  status: 'normal',
  showInfo: true
}

export default Progress;