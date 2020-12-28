import React from 'react';
import Checkbox, { CheckboxProps } from './checkbox';
import CheckboxGroup, { GroupProps } from './Group'

export type ICheckboxComponent = React.FC<CheckboxProps> & {
  Group: React.FC<GroupProps>
}

const TransCheckbox = Checkbox as ICheckboxComponent;

TransCheckbox.Group = CheckboxGroup;

export default TransCheckbox;