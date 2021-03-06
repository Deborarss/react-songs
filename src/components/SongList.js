import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import '../css/SongList.css';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="SongList-item" key={song.title}>
          <h1 className="SongList-title">{song.title}</h1>
          <input
            type="button"
            className="SongList-button"
            onClick={() => this.props.selectSong(song)}
            value="Selecionar"
          />
        </div>
      );
    });
  }

  render() {
    // this.props === { songs: state.songs }
    // console.log(this.props);
    return <div className="SongList">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
