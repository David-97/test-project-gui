import * as React from "react";
import ListMovies from "./list-movies";

class ManageMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: []}
  }

  componentDidMount() {
    fetch("/movies").then(response => response.json()).then(movies => this.setState({movies}));
  }

  render() {
    return <ListMovies movies={this.state.movies}/>
  }
}

export default ManageMovies;