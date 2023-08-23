import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import config from '../../data/config.json';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';

function EditProduct() {

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const actionRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
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
    if (!(
      idRef.current && nameRef.current && priceRef.current && imageRef.current
      && categoryRef.current && descriptionRef.current && actionRef.current)) {
      return;
    }
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
    const idInput = idRef.current;
    if (!idInput) {
      return;
    }
    if (idInput.value === productId) {
      setIdUnique(true);
      return;
    }
    const result = products.filter(product => product.id === Number(idInput.value));
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