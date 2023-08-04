import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json';
import { Button } from 'react-bootstrap';
import config from '../../data/config.json';

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
  const [idUnique, setIdUnique] = useState(true);

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []))
  }, []);

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

  const checkIdUniqueness = () => {
    const result = productsFromFile.filter(product => product.id === Number(idRef.current.value));
    if (result.length === 0) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }

    if (found === undefined) {
      return <div>Toodet ei leitud</div>
    }

    if(categories.length === 0) {
      return <div>Loading...</div>
    }
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
      {/* <input defaultValue={found.category} ref={categoryRef} type='text' /> <br /> */}
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