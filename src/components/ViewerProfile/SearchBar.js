import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SearchItem from "./SearchItem";
import './Styling.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.searchType === "tvshow") {
      this.state = {
        searchType: "search-tv",
        media: [],
        searchMediaTitle: this.props.urlSearchTitle
      }
    }
    else {
      this.state = {
        searchType: "search-movies",
        media: [],
        searchMediaTitle: this.props.urlSearchTitle
      };
    }
    if (this.props.searchType === "tvshow" && this.state.searchMediaTitle !== "") {
      this.searchShows(this.state.searchMediaTitle)
    }
    else if (this.state.searchMediaTitle !== "") {
      this.searchMovies(this.state.searchMediaTitle)
    }

  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.urlSearchTitle !== prevProps.urlSearchTitle || prevProps.searchType !== this.props.searchType) {

    }
  }

  // so this takes the json which has a lot of stuff and chops it so it only has id and title
  // the main reason its needed is because tv title is called name so i fixed it here so
  // throughout rest of program it the title is title and we don't have to worry about it
  pickForPotential = (json) => {
    let temp;
    if (this.state.searchType === "search-movies") {
      temp = {mediaId: json.id, title: json.title};
      return temp;
    } else {
      temp = {mediaId: json.id, title: json.name};
      return temp;
    }
  };

  // had to make this for the same exact reason (title/name), but this query gives you back A LOT of stuff
  // so we probably will end up adding more stuff to it, if you want to see all the info thats given uncomment the line below
  pickForChosen = (json) => {
    let temp;
    if (this.state.searchType === "search-movies") {
      temp = {
        type: "MOVIE",
        mediaId: json.id,
        description: json.overview,
        posterPath: json.poster_path,
        title: json.title
      };
      return temp;
    } else {
      temp = {
        type: "TV",
        mediaId: json.id,
        description: json.overview,
        posterPath: json.poster_path,
        title: json.name
      };
      return temp;
    }
  };

  searchMovies = (title) => {
    fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US&query=${title}&max-results=5`)
    .then(response => response.json())
    .then(results => results.results.map(e => this.pickForPotential(e)))
    .then(results => {
      let items = results.slice(0, 10);
      this.setState({media: items})
    })
  };

  searchShows = (title) => {
    fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US&query=${title}`)
    .then(response => response.json())
    .then(results => results.results.map(e => this.pickForPotential(e)))
    .then(results => {
      let items = results.slice(0, 10);
      this.setState({media: items})
    })
  };

  getPlaceHolder = () => {
    if (this.state.searchType === "search-movies") {
      return "Search for new movies"
    } else {
      return "Search for new shows"
    }
  };

  addThisId = (id) => {
    if (this.state.searchType === "search-movies") {
      fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
      .then(response => response.json())
      .then(results => this.props.addMedia(this.pickForChosen(results)))
    } else {
      fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
      .then(response => response.json())
      .then(results => this.props.addMedia(this.pickForChosen(results)))
    }
  };

  render() {
    return (
        <div className="row search-bar">

          {!this.props.viewOnly &&
          <h5 className="watchlist-text">Your Watch List</h5>}
          {this.props.viewOnly &&
          <h5 className="watchlist-text">Viewing Friend's Watchlist</h5>}


          {!this.props.viewOnly && <i
              className="fa fa-2x fa-search d-none ml-auto d-md-block"/>}
          {!this.props.viewOnly && <select className="d-none d-md-block"
                                           id="search-media"
                                           onChange={(e) => {
                                             const newType = e.target.value;
                                             this.setState({
                                               searchType: newType,
                                               media: [],
                                             })
                                           }}
                                           value={this.state.searchType}>
            <option value={"search-movies"}>Movies</option>
            <option value={"search-tv"}>TV Shows</option>
          </select>}


          {!this.props.viewOnly &&
          <Dropdown
              className="long-input ml-auto mr-2  d-sm-block d-md-none dropdown">
            <input className="long-input form-control" type="text"
                   placeholder={this.getPlaceHolder()} onChange={e => {
              this.setState({searchMediaTitle: e.target.value});
              {
                e.target.value.length < 2 && this.setState({media: []})
              }
              {
                e.target.value.length > 1 && this.state.searchType
                === "search-movies" && this.searchMovies(e.target.value)
              }
              {
                e.target.value.length > 1 && this.state.searchType
                === "search-tv" && this.searchShows(e.target.value)
              }
            }} value={this.state.searchMediaTitle}/>

            {this.state.media.length > 0 &&
            <div className={"dropdown-content-2"}>
              {this.state.media.map(entry =>
                  <SearchItem class="search-item"
                              media={entry}
                              searchType={this.state.searchType}
                              addThisId={this.addThisId}/>)}
            </div>}
          </Dropdown>}


          {!this.props.viewOnly &&
          <Dropdown className="dropdown long-input ml-2 mr-2 d-none d-md-block">
            <input className="long-input form-control" type="text"
                   placeholder={this.getPlaceHolder()} onChange={e => {
              this.setState({searchMediaTitle: e.target.value});
              {
                e.target.value.length < 2 && this.setState({media: []})
              }
              {
                e.target.value.length > 1 && this.state.searchType
                === "search-movies" && this.searchMovies(e.target.value)
              }
              {
                e.target.value.length > 1 && this.state.searchType
                === "search-tv" && this.searchShows(e.target.value)
              }
            }} value={this.state.searchMediaTitle}/>

            {this.state.media.length > 0 &&
            <div className={"dropdown-content-2"}>
              {this.state.media.map(entry =>
                  <SearchItem class="search-item"
                              media={entry}
                              searchType={this.state.searchType}
                              addThisId={this.addThisId}/>)}
            </div>}
          </Dropdown>}


        </div>
    )
  }

}

export default SearchBar;


