import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <Nav>
      <Nav.Item>
        <LinkContainer to='/login'>
          {step1 ? (
            <Nav.Link>Sign In</Nav.Link>
          ) : (
            <Nav.Link disabled> sign In</Nav.Link>
          )}
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/shipping'>
          {step2 ? (
            <Nav.Link>Shipping</Nav.Link>
          ) : (
            <Nav.Link disabled> Shipping</Nav.Link>
          )}
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/payment'>
          {step3 ? (
            <Nav.Link>Payment</Nav.Link>
          ) : (
            <Nav.Link disabled> Payment</Nav.Link>
          )}
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/placeorder'>
          {step4 ? (
            <Nav.Link>Place Order</Nav.Link>
          ) : (
            <Nav.Link disabled> Place Order</Nav.Link>
          )}
        </LinkContainer>
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
