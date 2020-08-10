import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


const ReviewCreate = (props) => {
    const [title, setTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [rating, setRating] = useState();
    const [description, setDescription] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/review/create', {
            method: 'POST',
            body: JSON.stringify({review: {title: title, artistName: artistName, projectName: projectName, rating: rating, description: description}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((reviewData) => {
            console.log(reviewData);
            setTitle('');
            setArtistName('');
            setProjectName('');
            setRating();
            setDescription('');
            
        })
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="title"/>
                <Input onChange={(e) => setTitle(e.target.value)} name="title" value={title}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="artistName"/>
                <Input onChange={(e) => setArtistName(e.target.value)} name="artistName" value={artistName}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="projectName"/>
                <Input onChange={(e) => setProjectName(e.target.value)} name="projectName" value={projectName}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="rating"/>
                <Input onChange={(e) => setRating(e.target.value)} type="radial" name="rating" value={rating}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description"/>
                <Input onChange={(e) => setDescription(e.target.value)} name="description" value={description}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
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