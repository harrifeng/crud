import React from 'react';
import PropTypes from 'prop-types';

const GamesList = ({games}) => {
  const emptyMessage = (
    <p>There are no games yet</p>
  );
  const gamesList = (
    <p>Games List</p>
  );

  return (
    <div>
      { games.length === 0 ? emptyMessage : gamesList }
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}

export default GamesList
