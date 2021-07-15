import React from 'react';
import SongList from './songlist';
import SongDetail from './songdetail';

const App = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <SongList />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
