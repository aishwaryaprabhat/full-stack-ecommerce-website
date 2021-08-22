import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem, Form } from 'react-bootstrap'

import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({match, history}) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
        
    }, [dispatch, match])

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
        console.log('Add to cart:', match.params.id)
    }
    // const [product, setProduct] = useState([])
    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {loading ? <Loader />
                : error ? <Message variant="danger">{error}</Message>
                : 
            <Row>
                <Col md={6}>
                    <Image src={product.image} alr={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                                </Row>
                            </ListGroupItem>
                            {product.countInStock >0 && (
                               <ListGroupItem>
                                   <Row>
                                       <Col>Qty</Col>
                                       <Col xs='auto' className='my-1'>
                                            <Form.Control
                                            as="select"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                        <option value={x+1} key={x+1}>
                                                            {x+1}
                                                        </option>
                                                    ))
                                                }

                                            </Form.Control>
                                       </Col>
                                   </Row>
                               </ListGroupItem> 
                            )}
                            <ListGroupItem>
                                <Row>
                                    <Button 
                                    onClick={addToCartHandler}
                                    className='btn-block' 
                                    type="button" 
                                    disabled={product.countInStock==0}>
                                    
                                    ADD TO CART
                                        
                                    </Button>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
}
        </div>
    )
}

export default ProductScreen
