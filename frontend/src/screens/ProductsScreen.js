import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FarmerProduct from '../components/FarmerProduct';
import farmerProducts from '../farmer-products';

const ProductsScreen = () => {
  const { id } = useParams();
  const farmerProductsTemp = farmerProducts.filter(
    (farmerProduct) => String(farmerProduct.product._id) === id
  );
  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      <Row>
        {farmerProductsTemp.map((farmerProduct) => (
          <Col key={farmerProduct._id} sm={12} md={6} Lg={4} xl={3}>
            <FarmerProduct farmerProduct={farmerProduct} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};
export default ProductsScreen;
