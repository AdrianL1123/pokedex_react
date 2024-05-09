import React from "react";

function PokemonGrid(props) {
  const { pokemons, isLoading, isError } = props;
  /* INSTRUCTION: add a loading message when isLoading is true */
  if (isLoading) {
    return <>...Loading</>;
  } else if (isError) {
    return <>Error: {isError.message}</>;
  }
  /* INSTRUCTION: add an error message when isError is true */

  return (
    <>
      {pokemons.length > 0 ? (
        <div className="pokemon-grid">
          {pokemons.map((p) => (
            <div key={p.name} className="pokemon-card">
              <h5>{p.name}</h5>
              <p>Type:{p.type}</p>
              <p>Level:{p.level}</p>
            </div>
          ))}
          {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
        </div>
      ) : (
        <div>
          <h1>No pokemons found.</h1>
        </div>
      )}
    </>
  );
}
export default PokemonGrid;
