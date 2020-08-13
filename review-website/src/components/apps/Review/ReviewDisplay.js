import React, {useState, useEffect} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import APIURL from '../../../helpers/environment'; 


  const ReviewDisplay = (props) => {
    const [projectName, setProjectName] = useState([]);

    useEffect(() => {
        setProjectName(String(props.info.title))
        }, [props.info]);

    const deleteReview = (review) => {
        fetch(`${APIURL}/review/delete/${review.id}`, {
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
                <Card className="card" key={index}>
                    <CardBody>
                        <CardTitle>
                            {review.title}
                        </CardTitle>
                        <CardSubtitle>
                            {review.artistName}
                        </CardSubtitle>
                        <CardSubtitle>
                            {review.projectName}
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