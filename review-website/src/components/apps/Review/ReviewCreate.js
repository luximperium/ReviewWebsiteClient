import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../../../App.css'
import APIURL from '../../../helpers/environment';


const ReviewCreate = (props) => {
    const [title, setTitle] = useState('');
    const [artistName, setArtistName] = useState("");
    const [projectName, setProjectName] = useState([]);
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    console.log(`${APIURL}/review/user/mine`)

    useEffect(() => {
        setProjectName(String(props.info.id))
        setArtistName(String(props.regularinfo.artist))
        }, [props.info]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/review/create`, {
            method: 'POST',
            body: JSON.stringify({review: {title: title, artistName: artistName, projectName: projectName, rating: rating, description: description}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token,
            })
        }) 
        .then((res) => res.json())
        .then((reviewData) => {
          console.log(reviewData);
          setTitle('');
          setRating('');
          setDescription('');
          props.fetchReviews();
        }) .catch(() => console.log({error: "no session token exists"}))
    }

    return(
        <div className="main createForm">
            <div className="mainDiv">
                <div className="create">
            <h1 className="create">Create a new Review!</h1>
                </div>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="title">Title:</Label>
                <Input onChange={(e) => setTitle(e.target.value)} name="title" value={title}/>
            </FormGroup>
            <FormGroup check inline>
                <div className="ratingword">
                <p>Rating:</p>
                </div>
                <div className="ratingbuttons">
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice1" value={1}  />
                1</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice2" value={2}  />
                2</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice3" value={3}  />
                3</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice4" value={4}  />
                4</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice5" value={5}  />
                5</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice6" value={6}  />
                6</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice7" value={7}  />
                7</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice8" value={8}  />
                8</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice9" value={9}  />
                9</Label>
                <Label check>
                <Input onChange={(e) => setRating(e.target.value)} type="radio" name="rating" id="ratingChoice10" value={10}  />
                10</Label>
                </div>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description">Description:</Label>
                <Input onChange={(e) => setDescription(e.target.value)} name="description" value={description}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </div>
        </div>
    )
}

// title: req.body.review.title,
//         artistName: req.body.review.artistName,
//         projectName: req.body.review.projectName,
//         rating: req.body.review.rating,
//         description: req.body.review.description,
//         author: req.user.username,
//         owner: req.user.id

export default ReviewCreate; 