import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import RcRate from 'rc-rate';
import { RateProps as RcRateProps } from 'rc-rate/lib/Rate';
import Icon from '../Icon';

const prefixCls = 'ship-rate';

export interface RateProps extends RcRateProps {
  /** 是否允许再次点击后清除 */
  allowClear?: boolean;
  /** 是否允许半选 */
  allowHalf?: boolean;
  /** 自动获取焦点 */
  autoFocus?: boolean;
  /** 自定义字符 */
  character?: ReactNode;
  /** 自定义样式类名 */
  className?: string;
  /** star 总数 */
  count?: number;
  /** 默认值 */
  defaultValue?: number;
  /** 只读，无法进行交互 */
  disabled?: boolean;
  /** 自定义样式对象 */
  style?: CSSProperties;
  /** 自定义每项的提示信息 */
  tooltips?: string[];
  /** 当前数，受控值 */
  value?: number;
  /** 失去焦点时的回调 */
  onBlur?: () => void;
  /** 选择时的回调 */
  onChange?: (value: number) => void;
  /** 获取焦点时的回调 */
  onFocus?: () => void;
  /** 鼠标经过时数值变化的回调 */
  onHoverChange?: (value: number) => void;
  /** 按键回调 */
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
}

/**
 * 评分组件。
 * 
 * ```js
 * import { Rate } from 'ship-ui'
 * ```
 */
export const Rate: React.FC<RateProps> = (props) => {
  const { className, character, ...others } = props;
  const char = character || <Icon icon="star" />
  const classes = classNames({

  }, className)
  return (
    <RcRate
    character={char}
    className={classes}
      prefixCls={prefixCls}
      {...others}
    />
  )
}

Rate.defaultProps ={

}

export default Rate;