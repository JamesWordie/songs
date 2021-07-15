import React from 'react';
import SongList from './songlist';

const App = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <SongList />
        </div>
        <div className="col-md-6">

        </div>
      </div>
    </div>
  );
};

export default App;
