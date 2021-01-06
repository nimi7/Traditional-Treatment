import axios from 'axios';
import '../Article/Artical.css'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pic from '../../../src/components/Therapist/pics/Baboyakov.png'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, CardGroup, Modal, Form } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Article() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [allArticles, setAllArticles] = useState([]);
    const allArticlesvv = {
        content: "About Homeless",
        createDate: "2020-12-01T15:29:57.381Z",
        header: "Good Week",
        imgPath: "../../../src/components/Therapist/pics/Baboyakov.png",
        modifideDate: "2020-12-01T15:29:57.381Z",
        subHeader: "Home"
    }
    
    useEffect(() => {
        axios.get('/westaArticle')
            .then(res => {
                console.log('res.data',res.data)
                setAllArticles(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    })

    console.log('allArticles data', allArticles);


    return (

        <div>
            <Example />
            {allArticles.map((article, i) => (
                <CardGroup>
                    <Card >
                        <Card.Img variant="top" src={allArticles[i].imgPath} />
                        <Card.Body>
                            <Card.Title>{allArticles[i].header}</Card.Title>
                            <Card.Text>
                                {allArticles[i].content}
                            </Card.Text>
                            <Button variant="danger">מחיקה</Button>
                            <Button variant="success">עריכה</Button>

                        </Card.Body>
                    </Card>
                </CardGroup>
            ))}

            {allArticles.map((data)=>{
                return <h1>{data._id}</h1>
            })}
        </div>

        // <Grid container className={classes.root} spacing={2}>
        //     <Grid item xs={16}>
        //         <Grid container justify="center" spacing={spacing}>
        //             <Grid>
        //                 <Paper className={classes.paper}>

        //                     <h1>{allArticlesvv.header}</h1>
        //                         <img src={allArticlesvv.imgPath} />
        //                         <p>{allArticlesvv.content}</p>
        //                         <p>{allArticlesvv.subHeader}</p>

        //                 </Paper>
        //             </Grid>


        //         {/* {allArticles.map((article, i) => (
        //                 <Grid key={i} item>
        //                     <Paper className={classes.paper}>

        //                         <h1>{article.header}</h1>
        //                         <img src={article.imgPath} />
        //                         <p>{article.content}</p>
        //                         <p>{article.subHeader}</p>

        //                     </Paper>
        //                 </Grid>
        //             ))} */}
        //         {/* </Grid> */}
        //     </Grid>
        // </Grid>
    );
}

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="check5">
            <Button variant="primary"  onClick={handleShow}>
                יצירת מאמר לידיעון
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="check">צור כתבה לידיעון</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="check1">כותרת</Form.Label>
                            <Form.Control />
                            <Form.Label className="check2"> כותרת משנית </Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label=" תמונה" className="check3" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="check1">:תוכן </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer className="check4">
                    <Button variant="secondary" 
                        onClick={handleClose}>
                        סגור
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        שמור שינויים
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

