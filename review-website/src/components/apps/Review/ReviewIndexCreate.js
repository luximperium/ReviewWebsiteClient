import React, {useState, useEffect} from 'react';
import "../../../App.css";
import ReviewCreate from "./ReviewCreate";
import ReviewDisplay from "./ReviewDisplay";
import ReviewEdit from "./ReviewEdit";
import {Row, Col} from 'reactstrap';


const ReviewIndex = (props) => {
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState([]);

    const fetchReviews = () => {
        fetch('https://tna-blue-review-server.herokuapp.com/review/user/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((reviewData) => {
            setReviews(reviewData)
            console.log(reviewData)
        })
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    const editUpdateReview = (review) => {
        setReviewToUpdate(review);
        console.log(review);
    }
    
    const updateOn = () => {
        setUpdateActive(true);
    }
    
    const updateOff = () => {
        setUpdateActive(false);
    }


    return(
        <div className="main">
            <div className="mainDiv">
            <div className="reviewDiv">
                <div className="review-container">
                <h1>Review Something</h1>
                </div>
                <ReviewCreate token={props.token} fetchReviews={fetchReviews} />
                {updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} fetchReviews={fetchReviews}/> : <></>}
                </div>
            </div>
        </div>
    )
}


export default ReviewIndex;