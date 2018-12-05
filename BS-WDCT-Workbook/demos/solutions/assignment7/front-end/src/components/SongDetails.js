import React from 'react'
import globalStyles from './styles'

const styles = {
  button: {
    ...globalStyles.button,
    fontSize: '14px',
    verticalAlign: 'middle'
  }
}

const SongDetails = ({ song, play, currentId, id, isPlaying})=> {
  const icon = song.id === Number(currentId) && isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'
  return (
    <div>
      <h4>{song.title} <span onClick={() => play(id, !isPlaying)} style={styles.button}><i className={icon} ></i></span></h4>
      <p>{song.description}</p>
      
    </div>
  )
}

export default SongDetails