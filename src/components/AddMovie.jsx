import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddMovie(props) {
  
  const initialState = {
    title: "",
    movieLanguage: "",
    releaseYear: "",
    ott: "",
  };

  const [movie, setMovie] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (!movie.title) {
      toast.error("Please fill all the details !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    props.handleSumbit(movie);
    setMovie(initialState);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Add Movie</h1>
      <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }} >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input placeholder="Title" value={movie.title} name="title" onChange={handleInputChange} />
          <Form.Input placeholder="Language" value={movie.movieLanguage} name="movieLanguage" onChange={handleInputChange}/>
          <Form.Input placeholder="Year" value={movie.releaseYear} name="releaseYear" onChange={handleInputChange} />
          <Form.Input placeholder="OTT" value={movie.ott} name="ott" onChange={handleInputChange}/>
          <Button floated="right" positive type="submit" content="Submit" />
          <Button floated="right" type="button" content="Cancel" onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}
