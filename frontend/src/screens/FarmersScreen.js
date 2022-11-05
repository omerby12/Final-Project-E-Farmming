import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FarmerProduct from '../components/FarmerProduct';
import axios from 'axios';

const FarmersScreen = () => {
  const { id } = useParams();
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const fetchFarmers = async () => {
      const { data } = await axios.get(`/api/products/${id}/farmers`);
      setFarmers(data);
    };
    fetchFarmers();
  }, [id]);

  return (
    <React.Fragment>
      <Row>
        {farmers.map((farmerProduct) => (
          <Col key={farmerProduct._id} sm={12} md={6} Lg={4} xl={3}>
            <FarmerProduct farmerProduct={farmerProduct} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};
export default FarmersScreen;
