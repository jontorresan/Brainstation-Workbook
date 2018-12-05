import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import globalStyles from './styles'

const styles = {
  list: {
    listStyle: 'none',
    paddingLeft: '0'
  },
  button: {
    ...globalStyles.button,
    marginRight: '5px'
  }
}

const SongList = ({songs, ...props}) => {
  return (
    <div>
      <h2>Playlist</h2>
      <ul style={styles.list}>
        {
          songs.map((song, i) => 
            <Song key={i} song={song} id={i} {...props}/>
          )
        }
      </ul>
    </div>
  )
}

class Song extends Component {
  state = {
    isPlaying: this.props.isPlaying
  }

  componentDidUpdate(prevProps) {
    if(prevProps.isPlaying !== this.props.isPlaying) {
      if(this.props.currentId === this.props.id) {
        this.setState({
          isPlaying: this.props.isPlaying
        })
      }
    }
  }

  render() {
    const {play, song, id} = this.props
    return (
      <li>
        <span onClick={() => play(id, !this.state.isPlaying)}>
          <i style={styles.button} 
            className={
              this.state.isPlaying 
                ? 'fa fa-pause-circle' 
                : 'fa fa-play-circle'
              } ></i></span>
          <Link to={`/songs/${id}`}>
            {song.title}
          </Link>
      </li>
    )
  }
}

export default SongList