import { Fragment } from "react";
import { Table, Button } from "semantic-ui-react";
import "../index.css";

export default function MoviesTable(props) {
  return (
    <Fragment>
      <h1 style={{ marginLeft: "30px" }}>Movies List</h1>
      <Table
        celled
        style={{
          marginLeft: "30px",
          marginTop: "30px",
          width: "1100px",
          border: "1px solid black",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>OTT</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.movies.map((movie) => (
            <Table.Row key={movie.id}>
              <Table.Cell>{movie.title}</Table.Cell>
              <Table.Cell>{movie.movieLanguage}</Table.Cell>
              <Table.Cell>{movie.releaseYear}</Table.Cell>
              <Table.Cell>{movie.ott}</Table.Cell>
              <Table.Cell>
                <Button positive onClick={() => props.editForm(movie)}>
                  Edit
                </Button>
                <Button negative onClick={() => props.deleteMovie(movie.id)}>
                  {" "}
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
}
