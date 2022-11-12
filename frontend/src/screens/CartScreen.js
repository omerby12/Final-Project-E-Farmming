import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToCart } from '../features/cart/cartThunk';
import Cart from '../components/Cart/Cart';

const CartScreen = () => {
  const dispatch = useDispatch();

  const { id: farmerProductId } = useParams();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (farmerProductId) {
      dispatch(addToCart({ farmerProductId, qty }));
    }
  }, [dispatch, farmerProductId, qty]);

  return <Cart cartItems={cartItems} />;
};

export default CartScreen;
