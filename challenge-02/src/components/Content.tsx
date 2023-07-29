import { useState, useEffect } from 'react'
import { api } from '../services/api';
import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface ContentProps{
    movies: MovieProps[];
    currentGenre: GenreResponseProps
}

export function Content({ movies, currentGenre } : ContentProps) {
    return (
        <div className="container">
            <header>
                <span className="category">
                    Categoria:<span> {currentGenre.title}</span>
                </span>
            </header>

            <main>
                <div className="movies-list">
                    {movies.map((movie : MovieProps) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            runtime={movie.Runtime}
                            rating={movie.Ratings[0].Value}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
