import { Button, Table } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { isNumeric, isAlpha, isEmail, isEmpty } from 'validator';

function Employees() {

  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();

  // DONE: Load data from backend service
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => setEmployees(data || []))
  }, []);
  // const employeeData = employees.data || [];

  const addEmployee = () => {
    // DONE: Add validations
    // TODO: Add an employee to the table
    if (isEmpty(idRef.current.value) || !isNumeric(idRef.current.value)) {
      setMessage('ID täitmata või see pole number');
      idRef.current.value = '';
      return;
    } else if (isEmpty(firstNameRef.current.value) || !isAlpha(firstNameRef.current.value)) {
      setMessage('Eesnimi täitmata või see ei koosne tähtedest');
      // BUG: isAlpha ei tunnista täpitähti
      firstNameRef.current.value = '';
      return;
    } else if (isEmpty(lastNameRef.current.value) || !isAlpha(lastNameRef.current.value)) {
      setMessage('Perekonna nimi täitmata või see ei koosne tähtedest');
      // BUG: isAlpha ei tunnista täpitähti
      lastNameRef.current.value = '';
      return;
    } else if (isEmpty(emailRef.current.value) || !isEmail(emailRef.current.value)) {
      setMessage('Email täitmata või see pole valiidne');
      emailRef.current.value = '';
      return;
    } else if (isEmpty(avatarRef.current.value)) {
      setMessage('Avatari info täitmata');
      avatarRef.current.value = '';
      return;
    } else {
      // lisa töötaja
      employees.data.push(
        {
          "id": Number(idRef.current.value),
          "email": emailRef.current.value,
          "first_name": firstNameRef.current.value,
          "last_name": lastNameRef.current.value,
          "avatar": avatarRef.current.value
        }
      );
      // uuenda tabeli seis, anna teade, tühjenda väljad
      employees.slice();
      setMessage('Korras, töötaja on lisatud')
      idRef.current.value = '';
      emailRef.current.value = '';
      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      avatarRef.current.value = '';
    }

  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            {/* <!-- DONE: Add a column for an avatar --> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {employees.data.map((employee, index) =>
            <tr key={index}>
              <th><div>{employee.id}</div></th>
              <th><div>{employee.first_name}</div></th>
              <th><div>{employee.last_name}</div></th>
              <th><div>{employee.email}</div></th>
              <th><div><img src={employee.avatar} alt="" /></div></th>
              <td><Button type="button" variant="danger">Delete</Button></td>
            </tr>
          )}

          {/* <tr>
            <td>123</td>
            <td>Added first name 1</td>
            <td>Added last name 1</td>
            <td>email@email.com</td>
            <td>
              <img className='avatar_image' src="indian-woman.png" alt='' />
            </td>
            <td><Button type="button" variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>124</td>
            <td>Added first name 2</td>
            <td>Added last name 2</td>
            <td>email2@email.com</td>
            <td>
            <img className='avatar_image' src="indian-man.png" alt='' />
            </td>
            <td><Button type="button" variant="danger">Delete</Button></td>
          </tr> */}

          <tr className="input-row">
            <td><input required ref={idRef} type="text" placeholder="ID" className="form-control" /></td>
            <td><input required ref={firstNameRef} type="text" placeholder="First name" className="form-control" /></td>
            <td><input required ref={lastNameRef} type="text" placeholder="Last name" className="form-control" /></td>
            <td><input required ref={emailRef} type="text" placeholder="Email" className="form-control" /></td>
            <td><input required ref={avatarRef} type="text" placeholder="Avatar" className="form-control" /></td>
            <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
          </tr>
        </tbody>
      </Table>
      {message}
    </div>
  </div>)
}

export default Employees;