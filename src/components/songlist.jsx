import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// component
class SongList extends React.Component {
  renderList() {
    // 1st return is for returning an array
    return this.props.songs.map((song) => {
      // 2nd return is for return jsx
      return (
        <li className="list-group-item my-2" key={song.title}>
          <div className="card my-3">
            <div className="card-body d-inline-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">{song.title}</h5>
              <button
                className="btn btn-info"
                onClick={() => this.props.selectSong(song)}
              >
                Select
              </button>
              {/*<a href="#" className="btn btn-info"></a>*/}
            </div>
          </div>
        </li>
      );
    })
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  };
};

// by return this object with key songs will show up as props inside class above
// function can have any name you like
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// 2nd arg of actionCreator
export default connect(mapStateToProps, { selectSong })(SongList);
// syntax ()() refers to a function returning a function, 1st calls outer function, 2nd call return function
