import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import icon403 from './icons/403.svg'
import icon404 from './icons/404.svg'
import icon500 from './icons/500.svg'

const prefixCls = 'ship-result';

export type statusType = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'
export interface ResultProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** 操作区 */
  extra?: ReactNode;
  /** 自定义 icon */
  icon?: ReactNode;
  /** 结果的状态，决定图标和颜色 */
  status?: statusType;
  /** subTitle 文字 */
  subTitle?: ReactNode;
  /** title文字 */
  title?: ReactNode;
}

/**
 * # Result结果
 * 用于反馈一系列操作任务的处理结果。
 * 
 * ```js
 * import { Result } from 'ship-ui'
 * ```
 */
export const Result: React.FC<ResultProps> = (props) => {
  const { className, status = 'info', icon, title, subTitle, extra, ...others } = props
  const classes = classNames(prefixCls, `${prefixCls}-${status}`, className);
  const iconClasses = classNames(`${prefixCls}-icon`, {
    [`${prefixCls}-image`]: status === '403' || status === "404" || status === "500"
  });
  const renderStatusIcon = () => {
    function getIcon() {
      if (icon) return icon;
      switch (status) {
        case "success":
          return <Icon icon="check-circle" />
        case "warning":
          return <Icon icon="exclamation-triangle" />
        case "error":
          return <Icon icon="times-circle" />
        case "403":
          return <img src={icon403} alt="" />
        case "404":
          return <img src={icon404} alt="" />;
        case "500":
          return <img src={icon500} alt="" />;
        default:
          return <Icon icon="info-circle" />
      }
    }

    return (
      <span className="anticon">
        {getIcon()}
      </span>
    )
  }
  return (
    <div className={classes} {...others}>
      <div className={iconClasses}>
        {renderStatusIcon()}
      </div>
      <div className={`${prefixCls}-title`}>{title}</div>
      <div className={`${prefixCls}-subtitle`}>{subTitle}</div>
      <div className={`${prefixCls}-extra`}>
        {extra}
      </div>
    </div>
  )
}

export default Result;