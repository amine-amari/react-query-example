import React, { useEffect, useState } from 'react';

export default function Characters() {

    const [characters, setcharacters] = useState([]);

    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setcharacters(data.results);
    } 

    useEffect(() => {
        fetchCharacters();
    }, []);

  return (
    <div>
        {characters.map( (character) => (
            <div>{character.name}</div>
        ))}
    </div>
  )
}
