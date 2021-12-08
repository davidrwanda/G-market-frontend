import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addTocart, removeFromCart } from '../actions/cartAction'
const CartScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, qty } = useParams()
  useEffect(() => {
    if (id) {
      dispatch(addTocart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const checkoutHandler=()=>{
      navigate('/login/:shipping')
  }
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>{' '}
          </Message>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addTocart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(Number(item.countInStock)).keys()].map((x) => (
                        <option x={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              <h4>
                $
                {cartItems
                  .reduce(
                    (acc, item) => acc + Number(item.qty) * Number(item.price),
                    0
                  )
                  .toFixed(2)}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
