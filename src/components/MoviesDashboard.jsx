import { Grid } from "semantic-ui-react";
import AddMovie from "./AddMovie";
import MoviesTable from "./MoviesTable";
import EditMovie from "./EditMovie";

export default function MoviesDashboard(props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <MoviesTable movies={props.movies} editForm={props.editForm} deleteMovie={props.deleteMovie}/>
      </Grid.Column>
      <Grid.Column width="6">
        {props.showAddForm && (<AddMovie closeForm={props.closeForm} handleSumbit={props.handleSumbit} />)}
        {props.showEditForm && ( <EditMovie movie={props.movie} closeForm={props.closeForm} handleEditMovie={props.handleEditMovie} />  )}
      </Grid.Column>
    </Grid>
  );
}
