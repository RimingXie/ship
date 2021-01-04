import Radio, { RadioProps } from './radio';
import Group, { RadioGroupProps } from './group'
import RadioButton from './radioButton'

export type IRadioComponent = React.FC<RadioProps> & {
  Group: React.FC<RadioGroupProps>;
  Button: React.FC<RadioProps>
}

const TransRadio = Radio as IRadioComponent;

TransRadio.Group = Group;
TransRadio.Button = RadioButton;

export default TransRadio