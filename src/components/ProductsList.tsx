
import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { formatAsDollars } from '@/utils/formatAsDollars';
import { type ProductsResponse } from '@/utils';

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className='mt-2 grid gap-y-8'>
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatAsDollars(price);

        return (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card>
              <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                <img
                  src={image}
                  alt={title}
                  className='h-64 w-full md:h-48 md:w-48 rounded-md object-cover'
                />
                <div>
                  <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                  <h4>{company}</h4>
                </div>
                <p className='text-primary md:ml-auto'>
                  {dollarsAmount}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
