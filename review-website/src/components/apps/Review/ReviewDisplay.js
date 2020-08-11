import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


  const ReviewDisplay = (props) => {

    const deleteReview = (review) => {
        fetch(`http://localhost:3000/review/delete/${review.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchReviews())
    }

    const reviewMapper = () => {
        return props.reviews.map((review, index) => {
            return(
                <Card key={index}>
                    <CardImg alt="Review Image Here" />
                    <CardBody>
                        <CardTitle>
                            {review.title}
                        </CardTitle>
                        <CardSubtitle>
                            {review.artistName}
                        </CardSubtitle>
                        <CardText>

                        </CardText>
                        <Button>View</Button>
                        <Button>Update</Button>
                        <Button>Delete</Button>
                    </CardBody>
                </Card> 
            )
        })
    }
  }


  export default ReviewDisplay;