import React from "react";

class QueryBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchMovieTitle: '',
            searchType: "search-movies"

        }
    }

    searchMovies = (title)=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8ae10d69b6a533cb7f6179647228aab1&query=${title}`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.results
            }))


    }

    render() {
        return (

            <div>
                <div>
               <label for="newMedia">Search for New Media</label>
                <input type="text" id="newMedia" placeholder="That good good"
                       onChange={e => {
                           this.setState({searchMovieTitle: e.target.value})
                       }}
                       value={this.state.searchMovieTitle}/>
                <button className="new-media" onClick={() =>
                {this.state.searchType === "search-movies" && this.searchMovies(this.state.searchMovieTitle)
                     this.state.searchType !== "search-movies" && alert("not valid input")}}>+</button>

                    <select id="search-media" onChange={(e) => {
                        const newType = e.target.value;
                        this.setState({searchType: newType})
                    }}
                    value = {this.state.searchType}>
                        <option value={"search-movies"}>Movies</option>
                        <option value={"search-tv"}>TV Shows</option>
                        <option value={"search-users"}>Users</option>
                    </select>

                </div>

                <div>
                    <ul>
                        {this.state.movies.map((movie) =>
                        <li>{movie.original_title}</li>)}

                    </ul>
                </div>
            </div>
        )
    }

}

export default QueryBar;