import React from 'react';
import classNames from 'classnames';
import Checkbox from './checkbox';

const prefixCls = 'ship-checkbox-group'

export type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: Event) => void;
}

export interface GroupProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** 默认选中的选项 */
  defaultValue?: string[];
  /** 整组失效 */
  disabled?: boolean;
  /** CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 */
  name?: string;
  /** 指定可选项 */
  options?: Array<CheckboxOptionType | string>;
  /** 指定选中的选项 */
  value?: Array<CheckboxValueType>;
  /** 变化时回调函数 */
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}

export const CheckboxGroup: React.FC<GroupProps> = (props) => {
  const { className, options, value = [] } = props;
  console.log(props)
  const getChecked = (item: string | CheckboxOptionType) => {
    if(typeof item === 'string'){
      if(value.indexOf(item) >= 0){
        return true
      }
    }
    
    return false
  }
  const getGroupComponent = () => {
    return (
      <>
        {
          options?.map(item => {
            return (
              <Checkbox
                checked={getChecked(item)}
                key={item.toString()}
              >
                {item}
              </Checkbox>
            )
          })
        }
      </>
    )
  }
  const classes = classNames(prefixCls, {

  }, className)
  return (
    <div
      className={classes}
    >
      {getGroupComponent()}
    </div>
  )
}

export default CheckboxGroup;