import { useNavigation } from 'react-router-dom';
import { Button } from './ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

interface SubmitBtnProps {
  text: string;
  className?: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, className }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Button type='submit' className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className='flex'>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
};
export default SubmitBtn;
