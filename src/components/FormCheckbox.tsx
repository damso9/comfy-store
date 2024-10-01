import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface FormCheckboxProps {
  name: string;
  label?: string;
  defaultValue?: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  defaultValue,
}) => {
  const defaultChecked = defaultValue === 'on' ? true : false;
  return (
    <div className='mb-2 flex justify-between self-end'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
};
export default FormCheckbox;
