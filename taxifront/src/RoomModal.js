import React, {useState} from 'react'
import './RoomModal.css'
import { Modal, Button, FormControl } from 'react-bootstrap';

function RoomModal(props) {
    return (
        <Modal id = "Modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
            <Modal.Title id="contained-modal-tit
            le-vcenter">
                New Room
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id = 'modal'>       
                    <h3 id='modaltitle'>☑️ 목적지</h3>
                    <div id = 'input'>
                        <FormControl
                        placeholder="EX) 구미역"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>    
                </div>
                <hr></hr>
                <div id = 'modal'>
                    <h3 id='modaltitle'>☑️ 출발 시간</h3>
                    <div id = 'input'>
                        <FormControl id = 'hour'
                        placeholder="12"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                        <h4>시</h4>
                        <FormControl id = 'min'
                        placeholder="00"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                        <h4>분</h4>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>취소</Button>
                <Button variant='primary' onClick={props.saveInfo} >확인</Button>
            </Modal.Footer>
        </Modal>

        
    )
}

export default RoomModal;