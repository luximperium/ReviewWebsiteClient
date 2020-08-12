import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


  const ReviewDisplay = (props) => {

    const deleteReview = (review) => {
        fetch(`https://tna-blue-review-server.herokuapp.com/review/delete/${review.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchReviews())
    }
    console.log(props)
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
                            {review.description}
                        </CardText>
                        <Button>View</Button>
                        <Button color="warning" onClick={() => {props.editUpdateReview(review); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteReview(review)}}>Delete</Button>
                    </CardBody>
                </Card> 
            )
        })
    }
    return (
        <div className="main">
            <div className="reviewhistoryDiv">
            <div className="reviewhistoryword">
                <h3>Your Review History</h3>
                </div>
                {reviewMapper()}
            </div>
        </div>
    )
  }


  export default ReviewDisplay;