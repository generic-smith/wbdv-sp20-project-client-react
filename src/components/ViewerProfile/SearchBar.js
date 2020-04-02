import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SearchItem from "./SearchItem";
import './Styling.css';

class SearchBar extends React.Component {
    state = {
        searchType: "search-movies",
        media: [],
        searchMediaTitle: '',
    }

    // so this takes the json which has a lot of stuff and chops it so it only has id and title
    // the main reason its needed is because tv title is called name so i fixed it here so
    // throughout rest of program it the title is title and we don't have to worry about it
    pickForPotential = (json) => {
        let temp;
        if (this.state.searchType === "search-movies") {
            temp = {mediaId: json.id, title: json.title};
            return temp;
        }
        else {
            temp = {mediaId: json.id, title: json.name};
            return temp;
        }
    }

    // had to make this for the same exact reason (title/name), but this query gives you back A LOT of stuff
    // so we probably will end up adding more stuff to it, if you want to see all the info thats given uncomment the line below
    pickForChosen = (json) => {
        let temp;
        //{console.log(json)}
        if (this.state.searchType === "search-movies") {
            temp = {mediaId: json.id, posterPath: json.poster_path, title: json.title};
            return temp;
        }
        else {
            temp = {mediaId: json.id, posterPath: json.poster_path, title: json.name};
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
            return "Search for new movies"
        }
        else {
            return "Search for new shows"
        }
    }

    addThisId = (id) => {
        if (this.state.searchType === "search-movies") {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
                .then(response => response.json())
                .then(results => this.props.addMedia(this.pickForChosen(results)))
        }
        else {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
                .then(response => response.json())
                .then(results => this.props.addMedia(this.pickForChosen(results)))
        }
    }


  render() {
    return (
        <div className="row search-bar">
          <h5 className="watchlist-text">Your Watch List</h5>
          <div className="col">

            <div className="row mr-1 float-right">
                <h4 className="search-text mr-1"><i className="fa fa-search"></i></h4>
                <select className="mr-1" id="search-media"
                        onChange={(e) => {
                    const newType = e.target.value;
                    this.setState({searchType: newType, media:[], searchMediaTitle: ''})}}
                        value = {this.state.searchType}>
                    <option value={"search-movies"}>Movies</option>
                    <option value={"search-tv"}>TV Shows</option>
                    <option value={"search-users"}>Users</option>
                </select>


                <Dropdown className="dropdown" >
              <input className={"form-control make-bigger"} type="text" placeholder={this.getPlaceHolder()} onChange={e => {
                  this.setState({searchMediaTitle: e.target.value})
                  {e.target.value.length < 2 && this.setState({media: []})}
                  {e.target.value.length > 1 && this.state.searchType === "search-movies" && this.searchMovies(e.target.value)}
                  {e.target.value.length > 1 && this.state.searchType === "search-tv" && this.searchShows(e.target.value)}
              }} value={this.state.searchMediaTitle}/>

              {this.state.media.length > 0 &&
              <div className={"pos-a dropdown-content"}>
                  {this.state.media.map(entry =>
                      <SearchItem
                          media={entry}
                          addThisId={this.addThisId}/>)}
              </div>}
                </Dropdown>

            </div>
          </div>
        </div>
    )
  }

}

export default SearchBar;


