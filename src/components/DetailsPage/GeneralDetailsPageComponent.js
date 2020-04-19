import React from "react";
import "../ViewerProfile/Styling.css"
import god from "../ViewerProfile/morgan_freeman_is_god.jpg"


class GeneralDetailsPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: this.props.searchType,
            movie: "",
            tv: ""

        }
    }

    goBack = () => {
        this.props.history.push(`/home`);
    };


    componentDidMount() {
        if (this.state.searchType === "search-movies") {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.mediaId}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
                .then(response => response.json())
                .then(result => this.setState({movie: result}))
        } else {
            fetch(`https://api.themoviedb.org/3/tv/${this.props.mediaId}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
                .then(response => response.json())
                .then(result => this.setState({tv: result}))
        }
    }


    render() {
        return (
            <div className={"body stretch-down d-flex pt-2"}>
                <div className="col-1 mt-2">
                    <button className="btn btn-danger" onClick={this.goBack}>Back
                    </button>

                </div>
                <div className="container col-10 mt-2 mb-2">
                    <div className="row">

                        <div className={"container details-page-details stretch-down "}>
                            {this.state.searchType === "search-movies" &&
                            <h2 className={"details-page-title"}>{this.state.movie.title}</h2>
                            }
                            {this.state.searchType === "search-tv" &&
                            <h2 className={"details-page-title"}>{this.state.tv.name}</h2>}

                            {this.state.searchType === "search-movies" && this.state.movie.poster_path !== null &&
                            <img className={"card-image-top"}
                                 src={`https://image.tmdb.org/t/p/w200${this.state.movie.poster_path}`} width={250}
                                 height={400}/>
                            }
                            {this.state.searchType === "search-movies" && this.state.movie.poster_path === null
                            && <img className={"card-image-top"}
                                    src={god} width={250} height={400}/>
                            }
                            {this.state.searchType === "search-tv" && this.state.tv.poster_path !== null &&
                            <img className={"card-image-top"}
                                 src={`https://image.tmdb.org/t/p/w200${this.state.tv.poster_path}`} width={250}
                                 height={400}/>
                            }
                            {this.state.searchType === "search-tv" && this.state.tv.poster_path === null
                            && <img className={"card-image-top"}
                                    src={god} width={250} height={400}/>
                            }
                            <div className={"general-overview col-md-11"}>
                                <h3>Description</h3>
                                {this.state.searchType === "search-movies" &&
                                <h6>{this.state.movie.overview}</h6>}
                                {this.state.searchType === "search-tv" &&
                                <h6>{this.state.tv.overview}</h6>}

                                <h4 className={"company"}>Production Companies</h4>
                                {this.state.searchType === "search-movies"
                                && this.state.movie.production_companies && this.state.movie.production_companies.map(comp =>
                                    <li>{comp.name}</li>)}
                                {this.state.searchType === "search-tv"
                                && this.state.tv.production_companies && this.state.tv.production_companies.map(comp =>
                                    <li>{comp.name}</li>)}

                                <h4 className={"languages"}>Spoken Languages:
                                    {this.state.searchType === "search-tv" && this.state.tv.languages && this.state.tv
                                        && this.state.tv.languages.map(l =>
                                        <span>&nbsp;{l} /</span>
                                    )
                                    }
                                    {this.state.searchType === "search-movies"
                                    && this.state.movie.spoken_languages && this.state.movie.spoken_languages.map(l =>
                                    <span>&nbsp;{l.name} /</span>)}
                                </h4>
                                {this.state.searchType === "search-tv" &&
                                <h4>Episode Number: &nbsp;{this.state.tv.number_of_episodes}</h4>}
                                {this.state.searchType === "search-tv" &&
                                <h4>Season Number: &nbsp;{this.state.tv.number_of_seasons}</h4>}
                                {this.state.searchType === "search-movies" &&
                                <h4>Runtime: &nbsp; {this.state.movie.runtime} minutes</h4>}
                                {this.state.searchType === "search-movies" &&
                                <h4>Release Date: &nbsp; {this.state.movie.release_date}</h4>}



                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-1"/>


            </div>
        )
    }

}


export default GeneralDetailsPageComponent
