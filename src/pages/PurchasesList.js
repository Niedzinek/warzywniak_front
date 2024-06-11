import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { selectCurrentUser } from '../store/UserSlice';
import useFetch from '../services/useFetch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const PurchasesList = () => {
    const user = useSelector(selectCurrentUser);

    const url = `http://localhost:8080/purchase/${user.sub}`
    const {data, error, loading, fetchData} = useFetch(url);

    useEffect(() => {
        fetchData();
    },[]);

    if(loading) return <div>loading...</div>
    if(error) return <div>Error: {error.message}</div>

  return (
    <Container>
    <Row>
      <Col>
        <h2>Purchased Products</h2>
        {data&&data.map((purchase) => (
          <Card key={purchase.id} className="mb-3">
            <Card.Header>Purchase ID: {purchase.id}</Card.Header>
            <ListGroup variant="flush">
              {purchase.orderedProducts.map((orderedProduct) => (
                <ListGroup.Item key={orderedProduct.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{orderedProduct.product.name}</Card.Title>
                      <Card.Text>
                        <strong>Product ID:</strong> {orderedProduct.product.id}<br />
                        <strong>Price:</strong> ${orderedProduct.product.price}<br />
                        <strong>Quantity:</strong> {orderedProduct.quantity}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
);
};

export default PurchasesList;
