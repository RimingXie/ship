import React, { CSSProperties } from 'react'
import classNames from 'classnames';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import Radio, { RadioProps } from './radio'
import { CheckboxProps } from '../Checkbox/checkbox';

const prefixCls = 'ship-radio'
export type CheckboxValueType = string | number | boolean;

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}
export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}
export interface RadioGroupProps {
  /** RadioButton 的风格样式，目前有描边和填色两种风格 */
  buttonStyle?: 'outline' | 'solid';
  /** 默认选中的值 */
  defaultValue?: any;
  /** 禁选所有子单选器 */
  disabled?: boolean;
  /** RadioGroup 下所有 `input[type="radio"]` 的 name 属性 */
  name?: string;
  /** 以配置形式设置子元素 */
  options?: Array<CheckboxOptionType | string>;
  /** 用于设置 Radio `options` 类型 */
  optionType?: 'default' | 'button';
  /** 大小，只对按钮样式生效 */
  size?: 'large' | 'middle' | 'small';
  /**	用于设置当前选中的值 */
  value?: any;
  /** 选项变化时的回调函数 */
  onChange?: (e: Event) => void;
  className?: string;
  style?: CSSProperties;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { children, options, optionType, disabled, buttonStyle='outline', style, size } = props;
  const [value, setValue] = useMergedState(props.defaultValue, { value: props.value });
  const childOnChange = (ev: any) => {
    const lastValue = value;
    const val = ev.target.value;
    if (!('value' in props)) {
      setValue(val);
    }
    const { onChange } = props;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  }
  let childrenToRender = children;
  const renderRadio = () => {
    
    if (options && options.length > 0) {
      // const optionsPrefixCls = optionType === 'button' ? `${prefixCls}-button` : prefixCls;
      childrenToRender = options.map(option => {
        if (typeof option === 'string') {
          // 此处类型自动推导为 string
          return (
            <Radio
              key={option}
              disabled={disabled}
              value={option}
              checked={value === option}
              onChange={childOnChange}
              type={optionType}
            >
              {option}
            </Radio>
          );
        }
        // 此处类型自动推导为 { label: string value: string }
        return (
          <Radio
            key={`radio-group-value-options-${option.value}`}
            disabled={option.disabled || disabled}
            value={option.value}
            checked={value === option.value}
            style={option.style}
            onChange={childOnChange}
            type={optionType}
          >
            {option.label}
          </Radio>
        );
      });
    }
    if(!children){
      return;
    }
    childrenToRender = React.Children.map(children,(child, index) => {
      const childElement = child as React.FunctionComponentElement<RadioProps>
      const { displayName } = childElement.type;
      if(displayName === 'radio' || displayName === 'radioButton'){
        let val: any = childElement.props.value
        return React.cloneElement(childElement, {
          value: val || index,
          name: childElement.props.name,
          checked: value === val,
          onChange: childOnChange,
          disabled: childElement.props.disabled || disabled
        })
      }else{
        console.error("Warning: RadioGroup has a child which is not a Radio component")
      }
    })
  }
  renderRadio()
  const classes = classNames(
    `${prefixCls}-group`,
  `${prefixCls}-group-${buttonStyle}`,
  {
    [`${prefixCls}-group-${size}`]: size
  }
  )

  return (
    <div className={classes} style={style}>
      { childrenToRender }
    </div>
  )
}

export default RadioGroup;