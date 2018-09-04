import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Games List from './GamesList';

class GamesPage extends Component {
  render() {
    return (
      <div>
        <GamesList games={ this.props.games } />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isReuired
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(GamesPage);
