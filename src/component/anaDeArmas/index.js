import React, { Component } from "react";
import './index.css';

class MovieUploader extends Component {
    state = {
        movies: [],
        newMovieName: '',
        newMovieUrl: ''
    };

    handleNameChange = (e) => {
        this.setState({ newMovieName: e.target.value });
    }

    handleUrlChange = (e) => {
        this.setState({ newMovieUrl: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { newMovieName, newMovieUrl } = this.state;
        if (newMovieName.trim() !== '' && newMovieUrl.trim() !== '') {
            const newMovie = { name: newMovieName, url: newMovieUrl };
            this.setState(prevState => ({
                movies: [...prevState.movies, newMovie],
                newMovieName: '',
                newMovieUrl: ''
            }));
        }
    }

    render() {
        const { movies, newMovieName, newMovieUrl } = this.state;

        return (
            <div>
                <h1>Movie Uploader</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Movie Name:
                        <input type="text" value={newMovieName} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Movie URL:
                        <input type="text" value={newMovieUrl} onChange={this.handleUrlChange} />
                    </label>
                    <button type="submit">Add Movie</button>
                </form>
                <h2>Uploaded Movies:</h2>
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <a href={movie.url}>{movie.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MovieUploader;
