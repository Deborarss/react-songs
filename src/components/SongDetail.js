import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/SongDetail.css';

class SongDetail extends Component {
  render() {
    const { song } = this.props;
    // console.log(song);
    if (!song) return <div className="select-song">Selecione uma música</div>;

    return (
      <div className="SongDetail">
        <h3 className="SongDetail-title">Detalhes:</h3>
        <p>
          Título: {song.title}
          <br />
          Duração: {song.duration}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
