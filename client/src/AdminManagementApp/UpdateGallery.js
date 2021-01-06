import { renderCell } from '@syncfusion/ej2-react-schedule';
import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './CrudArticle/AdminCrude.css'
export default class UpDate extends Component{
    render(){
        return (

            <Form className='Crudes' action='' method='POST'>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>name</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Enter Name Here..." />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>imgPath</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Name_Of_Pic.jpg' />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>createDate</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='DD/MM/YYYY' />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>modifideDate</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='DD/MM/YYYY' />
                </Form.Group>
            </Form>
        )
    }


}