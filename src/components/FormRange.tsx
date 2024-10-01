import { formatAsDollars } from '@/utils/formatAsDollars';
import { Label } from './ui/label';
import { useState } from 'react';
import { Slider } from './ui/slider';

interface FormRangeProps {
  name: string;
  label?: string;
  defaultValue?: string;
}

const FormRange: React.FC<FormRangeProps> = ({ name, label, defaultValue }) => {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize flex justify-between'>
        {label || name}
        <span>{formatAsDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
        className='mt-4'
      />
    </div>
  );
};
export default FormRange;
