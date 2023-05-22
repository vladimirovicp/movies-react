import React from "react";
import {Movies} from "../components/Movies";


const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{

    state = {
        movies: [],
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {

        const {movies} = this.state;

        return <main className='container content'>
            {
                movies.length ? (
                <Movies movies={this.state.movies} />
                ) : <h3>Loading...</h3>
            }

        </main>
    }
}



export {Main}
