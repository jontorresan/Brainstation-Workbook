import React, { Component } from 'react'
import globalStyle from './styles'

const styles = {
  title: {
    fontSize: '14px'
  },
  player: {
    textAlign: 'center',
    padding: '10px 0',
    borderBottom: 'solid 1px grey',
    marginBottom: '20px'
  },
  controls: {
    padding: '5px 0'
  },
  button: {
    ...globalStyle.button,
    padding: '0 3px',
    fontSize: '30px',
    verticalAlign: 'middle'
  },
  previousButton: {
    fontSize: '18px'
  },
  nextButton: {
    fontSize: '18px'
  }
}

class Player extends Component {
  state = { 
    currentTime: '00:00',
    duration: '00:00',
    currentSong: this.props.currentSong
  }

  formatTime(time) {
    time = Math.round(time)
    let min = Math.floor(time / 60)
    let sec = time - min * 60
    if(min < 10) min = `0${min}`
    if(sec < 10) sec = `0${sec}`
    return `${min}:${sec}`
  }

  componentDidMount() {
    this.audio.ontimeupdate = () => {
      this.setState({
        currentTime: this.formatTime(this.audio.currentTime)
      })
    }
    this.audio.onloadedmetadata = () => {
      this.setState({
        duration: this.formatTime(this.audio.duration)
      })
    }
    this.audio.onended = () => {
      if(!this.props.disableNext) this.props.next()
      else this.props.play(null, false)
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.song !== this.state.currentSong) {
      this.setState({
        currentSong: this.props.song
      })
    }
    console.log(prevProps.isPlaying, this.props.isPlaying)
    console.log(prevProps.song, this.props.song)
    console.log(this.state.currentSong)
    if(prevProps.isPlaying !== this.props.isPlaying || 
       this.props.song !== this.state.currentSong) {
      if(this.props.isPlaying) this.audio.play()
      else this.audio.pause() 
    }
    // console.log(prevProps.song, this.props.song)
    // if(prevProps.song !== this.props.song && !this.state.isPlaying) {
    // if(this.state.isPlaying) {
    //     this.audio.pause()
    //     this.audio.load()
    //     this.audio.play()
    // } else {
    //     this.audio.load()
    //     if(this.props.isPlaying) this.audio.play()
    // }
    // }
  }

  next = () => {
    if(!this.props.disableNext)
      this.props.next()
  }

  previous = () => {
    if(!this.props.disablePrev)
      this.props.previous()
  }

  play = () => {
    const { isPlaying } = this.props
    if(isPlaying) {
      !isPlaying ? this.audio.play() : this.audio.pause() 
    }
    this.props.play(this.props.song.id, !isPlaying)
  }

  render() {
    const { currentTime, duration } = this.state
    const { song, disableNext, disablePrev, isPlaying } = this.props
    const prevStyle = { opacity: disablePrev ? '0.5' : '1' }
    const nextStyle = { opacity: disableNext ? '0.5' : '1' }

    return (
      <div style={styles.player}>
        <div style={styles.title}>
          {song.title}
          {' '}
          ({currentTime} / {duration})
        </div>
        <audio 
          ref={audio => this.audio = audio} 
          src={song.source}
        />
        <div style={styles.controls}>
          <span onClick={this.previous} style={{
            ...styles.button,
            ...styles.previousButton
          }}>
            <i className='fa fa-step-backward' style={prevStyle}></i>
          </span>
          <span onClick={this.play} style={styles.button}>
            <i className={isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'} ></i>
          </span>
          <span onClick={this.next} style={{
            ...styles.button,
            ...styles.nextButton
          }}>
            <i className='fa fa-step-forward' style={nextStyle}></i>
          </span>
        </div>
      </div>
    )
  }
}

export default Player