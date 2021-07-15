// action creator
export const selectSong = (song) => {
  return {
    // return an object of an action
    type: 'SONG_SELECTED',
    payload: song
  };
};
