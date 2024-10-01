import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as landingLoader } from './pages/Landing';
import { loader as ordersLoader } from './pages/Orders';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';

// actions
import { action as checkoutAction } from './components/CheckoutForm';
import { action as loginUser } from './pages/Login';
import { action as registerUser } from './pages/Register';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        // Loader mean or is used for us to be able to , / we can’s access the data before the page renders
        // and we must always return something, or null
        // if not an error will be thrown
        // that returned value can then be access in the component
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginUser(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerUser,
  },
]);
function App() {
  // const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  // <div>
  //   {/* <h1 className='text-7xl font-bold '>App</h1>
  //   <Button
  //     variant='destructive'
  //     size='lg'
  //     onClick={() => console.log('it worked!!!')}
  //   >
  //     Click Me
  //   </Button>
  //   <Cart /> */}
  // </div>
  return <RouterProvider router={router} />;
}
export default App;
