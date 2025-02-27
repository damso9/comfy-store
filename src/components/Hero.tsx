import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <Button asChild size={'lg'} className='mt-10'>
          <Link to={'/products'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
