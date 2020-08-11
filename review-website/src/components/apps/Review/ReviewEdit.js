import React, { useState } from "react";
import {
  Modal,
  FormGroup,
  Input,
  Form,
  Button,
  Label,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const ReviewEdit = (props) => {
  const [editDesc, setEditDesc] = useState(props.reviewToUpdate.description);
  const [editTitle, setEditTitle] = useState(props.reviewToUpdate.title);
  const [editRating, setEditRating] = useState(props.reviewToUpdate.rating);

  const reviewUpdate = (event, review) => {
    event.preventDefault();
    fetch(`https://tna-blue-review-server.herokuapp.com/review/${props.reviewToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        review: { description: editDesc, title: editTitle, rating: editRating },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchReviews();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Update your Review</ModalHeader>
      <ModalBody>
        <Form onSubmit={reviewUpdate}>
          <FormGroup>
            <Label htmlFor="title">Edit Title:</Label>
            <Input
              name="title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Edit Description:</Label>
            <Input
              onChange={(e) => setEditDesc(e.target.value)}
              name="description"
              value={editDesc}
            />
          </FormGroup>
          <FormGroup check inline>
            <p>Rating:</p>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice1"
                value={1}
              />
              1
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice2"
                value={2}
              />
              2
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice3"
                value={3}
              />
              3
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice4"
                value={4}
              />
              4
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice5"
                value={5}
              />
              5
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice6"
                value={6}
              />
              6
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice7"
                value={7}
              />
              7
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice8"
                value={8}
              />
              8
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice9"
                value={9}
              />
              9
            </Label>
            <Label check>
              <Input
                onChange={(e) => setEditRating(e.target.value)}
                type="radio"
                name="rating"
                id="ratingChoice10"
                value={10}
              />
              10
            </Label>
          </FormGroup>
          <Button type="submit">Update the review!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ReviewEdit;
