import React, { ReactNode } from 'react';
import { Option as RcOption } from 'rc-select';
import { OptionProps as RcOptionProps } from 'rc-select/lib/Option';
export interface OptionProps extends RcOptionProps {
  /** Option 器类名 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 选中该 Option 后，Select 的 title */
  title?: string;
}

export const Option: React.FC<OptionProps> = (props) => {
  return (
    <RcOption {...props}>{props.children}</RcOption>
  )
}

export default Option;