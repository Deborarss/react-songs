import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Caught In The Middle', duration: '3:34' },
    { title: 'Friends', duration: '3:09' },
    { title: 'Bad Guy', duration: '3:20' },
    { title: "Everybody's Fool", duration: '3:17' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
