export const setGames = (games) => {
  return {
    type: 'SET_GAMEs',
    games
  }
};

export const fetchGames = () => {
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)))
  }
}
