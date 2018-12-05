import React, { Component } from 'react'
import Player from './Player'
import SongList from './SongList'
import SongDetails from './SongDetails'
import { Route } from 'react-router-dom'

function Song(source, title, description, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('/upstep.mp3', 'Upstep', 'Brutal beat and bulky bass are the foundation for a dubstep frenzy featuring synths, wailing guitar and jitters and glitches. Tempo: 140bpm', 0),
  new Song('/olympian.mp3', 'Olympian', 'An energetic, vibrant track featuring positive electric guitar licks and modern drums creates useful sports theme. Tempo: 130bpm', 1),
  new Song('/transmission.mp3', 'Transmission', 'Energetic electronic melody featuring modern drums, snaking bass and explosive electric guitar. Tempo: 120bpm', 2)
]

class App extends Component {
  state = {
    songs,
    currentSong: 0,
    isPlaying: false
  }

  previous = () => {
    this.play(this.state.currentSong - 1)
  }

  next = () => {
    this.play(this.state.currentSong + 1)
  }

  play = (index, isPlaying) => {
    if(index !== null) {
      this.setState({
        currentSong: index,
        isPlaying: this.state.currentId === index 
          ? !this.state.isPlaying 
          : isPlaying
      })
    } else {
      this.setState({
        isPlaying
      })
    }
  }

  render() {
    const { songs, currentSong, isPlaying } = this.state 
    return (
      <div className="container">
      <div className="row">
          <div className="col-12" style={{ padding: '0 0'}}>
            <Player
              disablePrev={currentSong === 0}
              disableNext={currentSong === songs.length - 1}
              previous={this.previous}
              next={this.next}
              song={songs[currentSong]}
              isPlaying={isPlaying}
              play={this.play}
            />
          </div>
        <div className="row">
          <div className="col-4">
            <SongList 
              songs={this.state.songs} 
              play={this.play} 
              isPlaying={this.state.isPlaying}
              currentId={this.state.currentSong}
            />
          </div> 
          <div className="col-8">
            <Route path="/songs/:songId" exact render={(props) => 
              <SongDetails 
                song={songs[props.match.params.songId]}
                play={this.play}
                currentId={this.state.currentSong}
                id={props.match.params.songId}
                isPlaying={this.state.isPlaying}
              />
            } />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
