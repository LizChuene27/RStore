import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InterestCalculator() {
  const [shoppingTotal, setShoppingTotal] = useState('');
  const [repaymentMonths, setRepaymentMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleCalculate = () => {
    const interestRate = 0.2; // 20% interest rate
    const totalPaid = shoppingTotal * (1 + interestRate);
    const monthlyPayment = totalPaid / repaymentMonths;

    setMonthlyPayment(monthlyPayment);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Shopping Interest Calculator</h2>
          <Form>
            <Form.Group>
              <Form.Label>Shopping Total:</Form.Label>
              <Form.Control
                type="number"
                value={shoppingTotal}
                onChange={(e) => setShoppingTotal(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Repayment Months:</Form.Label>
              <Form.Control
                type="number"
                value={repaymentMonths}
                onChange={(e) => setRepaymentMonths(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleCalculate}>
              Calculate
            </Button>
          </Form>

          <div className="mt-4">
            <p>Monthly Payment: {monthlyPayment}</p>
            <p>Total Paid: {monthlyPayment * repaymentMonths}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InterestCalculator;
