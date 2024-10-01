import { type LoaderFunction } from 'react-router-dom';
import { customFetch, ProductsResponseWithParams, type ProductsResponse } from '@/utils';
import { Filters, ProductsContainer, PaginationContainer } from '@/components';

const url = '/products';


// new URL(request.url) creates a new URL object from the URL in the request.
// .searchParams.entries() gets an iterator for entries in the query parameters, where each entry is an array of [key, value].

// ... is the spread operator, which expands the entries into individual elements.
// Object.fromEntries([...]) converts these entries back into an object, where each key-value pair becomes a property in the object.

// So, if your URL is http://example.com?param1=value1&param2=value2, the resulting params object would be { param1: 'value1', param2: 'value2' }.
export const loader: LoaderFunction = async ({ request}): Promise<ProductsResponseWithParams> => {
  // console.log(request.url)
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])

  const response = await customFetch<ProductsResponse>(url, {
    params
  });
  console.log(response.data)

  return { ...response.data, params };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products;
