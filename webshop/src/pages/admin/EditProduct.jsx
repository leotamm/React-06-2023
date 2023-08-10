import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import config from '../../data/config.json';

function EditProduct() {

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const actionRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { productId } = useParams();
  
  const found = products.find(product => product.id === Number(productId));

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []))
      
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);
        setLoading(false)
      })
  }, []);

  const edit = () => {
    const index = products.findIndex(product => product.id === Number(productId));
    products[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": actionRef.current.checked,
    };
    fetch(config.productsUrl, { method: "PUT", body: JSON.stringify(products) })
      .then(() => navigate('/admin/maintain-product'));
  }

  const checkIdUniqueness = () => {
    if (idRef.current.value === productId) {
      setIdUnique(true);
      return;
    }
    const result = products.filter(product => product.id === Number(idRef.current.value));
    if (result.length === 0) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (found === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      {idUnique === false && <div>Sisestatud ID ei ole unikaalne</div>}
      <label>ID</label>
      <input onChange={checkIdUniqueness} defaultValue={found.id} ref={idRef} type='number' /> <br />
      <label>Name</label>
      <input defaultValue={found.name} ref={nameRef} type='text' /> <br />
      <label>Price</label>
      <input defaultValue={found.price} ref={priceRef} type='number' /> <br />
      <label>Image</label>
      <input defaultValue={found.image} ref={imageRef} type='text' /> <br />
      <label>Category</label>
      <select ref={categoryRef} defaultValue={found.category} name="" id="">
        {categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
      </select><br />
      <label>Description</label>
      <input defaultValue={found.description} ref={descriptionRef} type='text' /> <br />
      <label>Active</label>
      <input defaultChecked={found.active} ref={actionRef} type='checkbox' /> <br />
      <Button disabled={idUnique === false} onClick={edit}>Muuda</Button>
    </div>
  )
}

export default EditProduct;