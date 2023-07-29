import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { api } from "../services/api";
import "../styles/sidebar.scss";

interface GenreResponseProps {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
}

interface SideBarProps {
    genres: GenreResponseProps[],
    currentGenre: number,
    onClick: (id: number) => void
}

export function SideBar({ genres, currentGenre, onClick} : SideBarProps) {
    return (
        <nav className="sidebar">
            <span>
                Watch<p>Me</p>
            </span>

            <div className="buttons-container">
                {genres.map((genre: GenreResponseProps) => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => onClick(genre.id)}
                        selected={currentGenre === genre.id}
                    />
                ))}
            </div>
        </nav>
    );
}
