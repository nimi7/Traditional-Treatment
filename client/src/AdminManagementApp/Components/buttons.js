import React from "react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const buttons = () => {
    return (

        // <div>
        //     <Button variant="primary">Primary</Button>{' '}
        //     <Button variant="primary">Primary</Button>{' '}
        //     <Button variant="primary">Primary</Button>{' '}
        // <div/>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
            <Button variant="secondary">Right</Button>
        </ButtonGroup>
    );
};

export default buttons;