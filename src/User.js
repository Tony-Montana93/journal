import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from "react-router-dom";

function User() {
  return (
    <div>
      <h1>User page</h1>
      <Form>
  <Form.Group>
    <Form.File type="file" id="profile-photo-input" label="Add a profile picture" accept="image/png, image/jpeg" />
    <input className="submit-input" type="submit" value="Upload"/>
  </Form.Group>
</Form>
      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Entry</Form.Label>
    <Form.Control type="journal entry" as="textarea" rows="3" />
  </Form.Group>
</Form>
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Please rate this app</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <em className='text-muted'>5 being the highest rating</em>
    </div>
  );
}


export default User;
