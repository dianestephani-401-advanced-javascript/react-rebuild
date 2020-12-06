import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Range from 'react-bootstrap/Range';




function MyMainForm(props) {

  function callToForm (object){
    props.makePost(object);
  };

  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    callToForm(item);
    console.log('handlesubmit item console.log*****', item);
    e.target.reset();
  }

  const handleChange = (e) => {
   setItem({...item, [e.target.name] : e.target.value})                                                         
  }

  useEffect( () => {
    setItem({...item, difficulty : 3, complete : false })
  }, [])

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="item">
      <Form.Label>To Do Item</Form.Label>
      <Form.Control name="text" type="text" placeholder="Add a task..." onChange={handleChange} required/>
    </Form.Group>
    <Form.Group controlId="assignee">
      <Form.Label>Assigned To:</Form.Label>
      <Form.Control name="assignee"  type="text" placeholder="Who will this task be assigned to?" onChange={handleChange}  required />
    </Form.Group>
    <Form>
    <Form.Group controlId="formBasicRange">
      <Form.Label>Range</Form.Label>
      <Form.Control name="difficulty" type="range" min="1" max="5" onChange={handleChange}  required />
    </Form.Group>
  </Form>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

  )
}

export default MyMainForm; 