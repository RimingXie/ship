import React from 'react';
import Select,{SelectProps} from './select'
import Option,{OptionProps} from './option'

export type ISelectComponent = React.FC<SelectProps> & {
  Option: React.FC<OptionProps>
}

const TransSelect = Select as ISelectComponent;

TransSelect.Option = Option

export default TransSelect;