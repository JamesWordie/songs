import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="">
        <h1 className="text-center">
          Select a Song
        </h1>
      </div>
    );
  };

  return (
    <div className="card w-auto">
      <div className="card-body">
        <h5 className="card-title">Details For:</h5>
        <p className="card-description my-2">Title: {song.title}</p>
        <p className="card-description my-2">Duration: {song.duration}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);

