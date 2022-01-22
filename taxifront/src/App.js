import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; // api axios 라이브러리 import 
import { Form,Col,Row } from 'react-bootstrap'; // bootstap form 사용 component import

function App () {

  function Main_Form()
  {
    const [inputId,setInputId] = useState('');
    const [inputPw,setInputPw] = useState('');
    const handlerId = (e)=>{ setInputId(e.target.value) };
    const handlerPw = (e)=>{ setInputPw(e.target.value) };
    const handlerSubmit = ()=>{ 
      axios({
        method: 'post',
        url: '/start',
        data: { id: inputId, password: inputPw },
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((result)=>{alert(result.data)})
      .catch((e)=>{alert(e)})
    };

    return(
      <div>
        <Form method='post' onSubmit={handlerSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextId">
            <Form.Label column sm="2">
              ID
            </Form.Label>
            <Col sm="10">
              <Form.Control name='id' type="id" placeholder="Id" required fullwidth='true' autoFocus onChange={handlerId}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              PWD
            </Form.Label>
            <Col sm="10">
              <Form.Control name='pw' type="password" placeholder="Password" required fullwidth='true' onChange={handlerPw}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextSignin">
            <Form.Label column sm="2">
            </Form.Label>
            <Col sm="10">
              <Form.Control type='submit' value='전송'/>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }

  return (
    <div className="App">
      <Main_Form/>
    </div>
  )
}

export default App;