import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

const prefixCls = 'ship-tag'
const defaultCloseIcon = <Icon icon="times" />

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** 标签是否可以关闭 */
  closable?: boolean;
  /** 自定义关闭按钮 */
  closeIcon?: ReactNode;
  /** 标签色 */
  color?: string;
  /** 设置图标 */
  icon?: ReactNode;
  /** 是否显示标签 */
  visible?: boolean;
  /** 关闭时的回调 */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * 进行标记和分类的小标签。
 * 
 * ```js
 * import { Tag } from 'ship-ui'
 * ```
 */
export const Tag: React.FC<TagProps> = (props) => {
  const [visible, setVisible] = React.useState(true);
  const { className, children, closeIcon, closable,style, color, onClose, icon, ...orders } = props
  const classes = classNames(prefixCls, className)
  const styles = {
    ...style,
    backgroundColor: color,
    color: color ? '#FFFFFF' : undefined,
    borderColor: color
  }
  React.useEffect(() => {
    if ('visible' in props) {
      setVisible(props.visible!);
    }
  }, [props.visible]);

  const handleCloseClick =(e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (onClose) {
      onClose(e);
    }
    if (e.defaultPrevented) {
      return;
    }
    
    if (!('visible' in props)) {
      setVisible(false);
    }
  }
  const getCloseIcon = () => {
    if (!closable) {
      return
    }
    return (
      <span onClick={handleCloseClick} className={`${prefixCls}-close-icon`}>
        { closeIcon || defaultCloseIcon}
      </span>
    )
  }
  console.log(icon)
  return (
    visible ?
    <span className={classes} style={styles}>
      <span className="anticon">{icon}</span>
      {icon ? <span>{children}</span> : children}
      { getCloseIcon()}
    </span>:
    null
  )
}

export default Tag;