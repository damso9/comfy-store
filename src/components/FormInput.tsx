import { Input } from './ui/input';
import { Label } from './ui/label';

interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  defaultValue,
}) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>{label || name}</Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
};
export default FormInput;
