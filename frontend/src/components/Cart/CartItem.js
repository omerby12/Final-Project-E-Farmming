import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap';
import { cartActions } from '../../features/cart/cartSlice';
import { addToCart } from '../../features/cart/cartThunk';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const cartChangeHandelr = (item, e) => {
    const farmerProductId = item.farmerProduct;
    const qty = Number(e.target.value);
    dispatch(addToCart({ farmerProductId, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart({ id }));
  };

  return (
    <ListGroup.Item key={item.farmerProduct}>
      <Row>
        <Col className='m-auto' md={2}>
          <Image
            className='farmer-img-cart-item'
            src={item.farmerImage}
            alt={item.farmerName}
            fluid
            rounded
          />
        </Col>
        <Col className='m-auto' md={2}>
          <Image src={item.productImage} alt={item.productName} fluid rounded />
        </Col>
        <Col className='m-auto' md={2}>
          <Link to={`/farmer-product/${item.farmerProduct}`}>
            {item.farmerName}
          </Link>
        </Col>

        <Col className='m-auto' md={1}>
          <Link to={`/farmer-product/${item.farmerProduct}`}>
            {item.productName}
          </Link>
        </Col>
        <Col className='m-auto mx-2 text-center' md={1}>
          {item.price}₪
        </Col>
        <Col className='m-auto' md={2}>
          <Form.Control
            as='select'
            value={item.qty}
            onChange={(e) => cartChangeHandelr(item, e)}
          >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col className='m-auto' md={2}>
          <Button
            type='button'
            ariant='light'
            onClick={() => removeFromCartHandler(item.farmerProduct)}
          >
            <i className='fas fa-trash'></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
