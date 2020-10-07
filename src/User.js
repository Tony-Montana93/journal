import React from 'react';
import Form from 'react-bootstrap/Form';

function User() {
  return (
    <div>
      <h1>User page</h1>
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Entry</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
    </div>
  );
}


export default User;
