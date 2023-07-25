import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json'
import { Button } from 'react-bootstrap';

function EditProduct() {

  const { productId } = useParams();

  const found = productsFromFile.find(product => product.id === Number(productId));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const actionRef = useRef();

  const navigate = useNavigate();

  const edit = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(productId));
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": actionRef.current.checked,
    };
    navigate('/admin/maintain-product');
  }

  if (found === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <label>ID</label>
      <input defaultValue={found.id} ref={idRef} type='number' /> <br />
      <label>Name</label>
      <input defaultValue={found.name} ref={nameRef} type='text' /> <br />
      <label>Price</label>
      <input defaultValue={found.price} ref={priceRef} type='number' /> <br />
      <label>Image</label>
      <input defaultValue={found.image} ref={imageRef} type='text' /> <br />
      <label>Category</label>
      <input defaultValue={found.category} ref={categoryRef} type='text' /> <br />
      <label>Description</label>
      <input defaultValue={found.description} ref={descriptionRef} type='text' /> <br />
      <label>Active</label>
      <input defaultChecked={found.active} ref={actionRef} type='checkbox' /> <br />
      <Button onClick={edit}>Muuda</Button>
    </div>
  )
}

export default EditProduct