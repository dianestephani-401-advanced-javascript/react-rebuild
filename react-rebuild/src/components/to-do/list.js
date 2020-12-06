import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';

function List(){
  return(
    <Toast>
  <Toast.Header>
  <Badge pill variant="success">
    Success
  </Badge>{' '}
    <strong className="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
  )
}

export default List;