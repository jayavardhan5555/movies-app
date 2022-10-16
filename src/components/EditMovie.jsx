import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";

export default function EditMovie(props) {
  const [movie, setMovie] = useState(props.movie);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleEditMovie(movie);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Edit Movie</h1>
      <Segment
        clearing
        style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input
            placeholder="Title"
            value={movie.title}
            name="title"
            onChange={handleInputChange}
          />

          <Form.Input
            placeholder="Language"
            value={movie.movieLanguage}
            name="movieLanguage"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Year"
            value={movie.releaseYear}
            name="releaseYear"
            onChange={handleInputChange}
          />

          <Form.Input
            placeholder="OTT"
            value={movie.ott}
            name="ott"
            onChange={handleInputChange}
          />
          <Form.TextArea
            placeholder="Description"
            value={movie.description}
            name="description"
            onChange={handleInputChange}
          />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button
            floated="right"
            type="button"
            content="Cancel"
            onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}
