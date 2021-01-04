import * as React from 'react';
import Radio, { RadioProps } from './radio';

const RadioButton = (props: RadioProps) => {
  const { disabled, ...radioProps } = props;

  return <Radio
    {...radioProps} 
    disabled={disabled}
    type="button"
  />;
};
RadioButton.displayName = 'radioButton'
export default RadioButton;