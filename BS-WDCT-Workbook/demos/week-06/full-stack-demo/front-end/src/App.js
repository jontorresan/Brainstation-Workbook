import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/students')
      .then(({data}) => {
        console.log(data)
        this.setState({
          students: data
        })
      })
  }

  render() {

    const studentList = this.state.students.map((student, i) => (
      <li key={i}>{student.name}</li>
    ))

    return (
      <div className="App">
        <ul>
          {studentList}
        </ul>
      </div>
    );
  }
}

export default App;
