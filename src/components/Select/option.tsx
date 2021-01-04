import React, { ReactNode } from 'react';

export interface OptionProps {
  /** Option 器类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 选中该 Option 后，Select 的 title */
  title?: string;
  /** 默认根据此属性值进行筛选 */
  value?: string | number;
}

export const Option: React.FC<OptionProps> = (props) => {
  return (
    <div></div>
  )
}

export default Option;