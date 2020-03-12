import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SearchItem from "./SearchItem";

class SearchBar extends React.Component {
    state = {
        searchType: "search-movies",
        media: [],
        searchMediaTitle: '',
    }

    pickForPotential = (json) => {
        let temp;
        if (this.state.searchType === "search-movies") {
            temp = {id: json.id, title: json.title};
            return temp;
        }
        else {
            temp = {id: json.id, title: json.name};
            return temp;
        }
    }

    pickForChosen = (json) => {
        let temp;
        if (this.state.searchType === "search-movies") {
            temp = {id: json.id, poster_path: json.poster_path, title: json.title};
            return temp;
        }
        else {
            temp = {id: json.id, poster_path: json.poster_path, title: json.name};
            return temp;
        }
    }

    searchMovies = (title) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US&query=${title}`)
            .then(response => response.json())
            .then(results => results.results.map(e => this.pickForPotential(e)))
            .then(results => this.setState({media: results}))
    }

    searchShows = (title) => {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US&query=${title}`)
            .then(response => response.json())
            .then(results => results.results.map(e => this.pickForPotential(e)))
            .then(results => this.setState({media: results}))
    }

    getPlaceHolder = () => {
        if (this.state.searchType === "search-movies") {
            return "For new movies"
        }
        else {
            return "For new shows"
        }
    }

    addThisId = (id) => {
        if (this.state.searchType === "search-movies") {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
                .then(response => response.json())
                .then(results => this.props.changeMedia(this.pickForChosen(results)))
        }
        else {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
                .then(response => response.json())
                .then(results => this.props.changeMedia(this.pickForChosen(results)))
        }
    }


  render() {
    return (
        <div className="row border border-dark search-bar">
          <div className="col-3">
            Your Watch List
          </div>
          <div className="col">

            <div className="row mr-1 float-right">
                <select className="mr-1" id="search-media"
                        onChange={(e) => {
                    const newType = e.target.value;
                    this.setState({searchType: newType, media:[], searchMediaTitle: ''})}}
                        value = {this.state.searchType}>
                    <option value={"search-movies"}>Movies</option>
                    <option value={"search-tv"}>TV Shows</option>
                    <option value={"search-users"}>Users</option>
                </select>
                <div className="search-text mr-1">Search</div>



                <Dropdown>
              <input className={"form-control make-bigger"} type="text" placeholder={this.getPlaceHolder()} onChange={e => {
                  this.setState({searchMediaTitle: e.target.value})
                  {e.target.value.length < 2 && this.setState({media: []})}
                  {e.target.value.length > 1 && this.state.searchType === "search-movies" && this.searchMovies(e.target.value)}
                  {e.target.value.length > 1 && this.state.searchType === "search-tv" && this.searchShows(e.target.value)}
              }} value={this.state.searchMediaTitle}/>

              <div className={"pos-a bg-light"}>
                  {this.state.media.map(entry =>
                      <SearchItem
                      media={entry}
                      addThisId={this.addThisId}/> )}
              </div>
                </Dropdown>

            </div>
          </div>
        </div>
    )
  }

}

export default SearchBar;


