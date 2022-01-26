import React, { useState } from 'react'
import mapData from './Location.js';
import RoomModal from './RoomModal.js';
import "./MainScreen.css"

import { Navbar, Container, Nav, ButtonGroup, Button, Offcanvas, DropdownButton, Dropdown} from 'react-bootstrap';
import { render } from '@testing-library/react';

function MainScreen() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="MainScreen">
      <Navbar className='menubar' bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Taxi-Share</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">My Room</Nav.Link>
                <Nav.Link href="#action2">Others Room</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      { mapData() }
      
      <ButtonGroup className='buttonGroup' aria-label="Basic example">
        <DropdownButton
          className='choiceTime'
          as={ButtonGroup}
          key="up"
          id={`dropdown-button-drop-up`}
          drop="up"
          variant="secondary"
          title={` 시간대 선택 `}
        >
          <div style = {{height: '400px', overflow: "auto", textAlign: "center"}}>
            <Dropdown.Item eventKey="-1">전 체</Dropdown.Item>
            {reTime()}
          </div>
        </DropdownButton>
        <Button onClick={()=>setModalShow(true)} className='makeRoom' variant="secondary" size="lg">
          방 만들기
        </Button>

        <RoomModal
          show = {modalShow}
          onHide = {() => setModalShow(false)}
          saveInfo = {
            () => {setModalShow(false)
            }
          }
        />
      </ButtonGroup>
    </div>
  );
}

render(<MainScreen />)

function Time_Line(porps){
  return(
    <>
      <Dropdown.Divider />
      <Dropdown.Item eventKey={porps.chTime}>
        {porps.chTime + '시 ~ ' + (porps.chTime + 1) + '시'}
      </Dropdown.Item>
    </>
  )
}
function reTime(){
  var newArray = [];
  for(var i = 0; i < 24; i++)
  {
    newArray.push(<Time_Line chTime = {i}></Time_Line>)
  }
  return newArray;
}

export default MainScreen;