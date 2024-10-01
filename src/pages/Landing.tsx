import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import {
  type LoaderFunction,
  // useLoaderData
} from 'react-router-dom';
import { customFetch, type ProductsResponse } from '@/utils';

const url = '/products?featured=true';

// Loader mean or is used for us to be able to , / we can’s access the data before the page renders
// and we must always return something, or null
// if not an error will be thrown
// that returned value can then be access in the component
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  // console.log('landing page');
  // return null;
  const response = await customFetch<ProductsResponse>(url);
  // console.log(response);

  return { ...response.data };
};
function Landing() {
  // now we are accessing the data returned from our loader function in the route
  // Mind you it was of type unknown so we had to assert it to our preferered type

  // const result = useLoaderData() as ProductsResponse;
  // console.log(result.data);

  // Also another thing about useLoaderData is that our children will always have access to it no matter
  // how nested the are in this case <Hero /> and <FeaturedProduct /> will always have access to useLoaderData()
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
export default Landing;
