import { useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { isNumeric, isAlpha, isEmpty } from 'validator';

function Products() {
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const storeRef = useRef();
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([
    { name: 'Cupcake', price: 1.99, quantity: 7, store: 'Downtown store' },
    { name: 'Cheesecake', price: 2, quantity: 2, store: 'Ülemiste store' },
    { name: 'Bread', price: 3, quantity: 5, store: 'Lasnamäe store' },
    { name: 'Apple pie', price: 4, quantity: 2, store: 'Nõmme store' },
    { name: 'Éclair', price: 3.25, quantity: 1, store: 'Mustamäe store' },
    { name: 'Croissant', price: 1.99, quantity: 4, store: 'Downtown store' },
    { name: 'Cupcake', price: 2, quantity: 6, store: 'Ülemiste store' },
    { name: 'Bread', price: 5, quantity: 10, store: 'Lasnamäe store' },
    { name: 'Croissant', price: 1.8, quantity: 1, store: 'Lasnamäe store' },
    { name: 'Chocolate chip cookie', price: 3.25, quantity: 3, store: 'Mustamäe store' }
  ]);

  products.sort((a, b) => a.price - b.price);

  const addProduct = () => {
    // BUG - siin samuti !isAlpha laseb numbrid läbi!
    if (isEmpty(nameRef.current.value || !isAlpha(nameRef.current.value))) {
      setMessage('Nimi täitmata või see ei koosne tähtedest');
      nameRef.current.value = '';
      return;
    } else if (isEmpty(priceRef.current.value) || !isNumeric(priceRef.current.value)) {
      setMessage('Hind täitmata või see pole numbri kujul');
      priceRef.current.value = '';
      return;
    } else if (isEmpty(quantityRef.current.value) || !isNumeric(quantityRef.current.value)) {
      setMessage('Kogus täitmata või see pole numbri kujul');
      quantityRef.current.value = '';
      return;
    } else {
      const newProduct = {
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        quantity: Number(quantityRef.current.value),
        store: storeRef.current.value,
      }
      products.push(newProduct);
      setProducts(products.slice());
      setMessage('Korras, uus toode on lisatud');
      nameRef.current.value = '';
      priceRef.current.value = '';
      quantityRef.current.value = '';
      storeRef.current.value = ''
    }
  }

  const deleteProduct = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    setMessage('Korras, toode on eemaldatud')
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Products</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price (€)</th>
            <th scope="col">Quantity (pcs)</th>
            <th scope="col">Store</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* DONE: Order the products by price */}
          {products.map((product, index) =>
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price.toFixed(2)}</td>
              {/*  TODO: Display the quantity in red if it is lower than 3 */}
              {/*  ANOMALY: The red-alert css works, but doesn't render "color: red" at index.css Line 30*/}
              <td className={product.quantity < 3 ? "red_alert" : "regular-text"}>{product.quantity}</td>
              <td>{product.store}</td>
              <td><Button onClick={() => deleteProduct(index)} type="button" variant="danger">Delete</Button></td>
            </tr>
          )}
          <tr className="input-row">
            <td><input type="text" ref={nameRef} placeholder="Product" className="form-control" /></td>
            <td><input type="text" ref={priceRef} placeholder="Price" className="form-control" /></td>
            <td><input type="text" ref={quantityRef} placeholder="Quantity" className="form-control" /></td>
            <td>
              <select ref={storeRef} name="" id="" className="form-control">
                <option value="Lasnamäe store">Lasnamäe store</option>
                <option value="Downtown store">Downtown store</option>
                <option value="Ülemiste store">Ülemiste store</option>
                <option value="Nõmme store">Nõmme store</option>
              </select>
            </td>
            {/* <td><input type="text" ref={storeRef} placeholder="Store" className="form-control" /></td> */}
            <td><Button variant="success" type="submit" onClick={() => addProduct()} >Add</Button></td>
          </tr>
        </tbody>
      </Table>
      {message}
    </div>
  </div>)
}

export default Products;