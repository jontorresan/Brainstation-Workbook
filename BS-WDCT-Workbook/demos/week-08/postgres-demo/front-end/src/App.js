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
      .then(response => {
        console.log(response.data)
        this.setState({
          students: response.data
        })
      })
  }

  render() {

    const students = this.state.students.map(student => {
      return <li key={student.id}>{student.name} {student.email}</li>
    })

    return (
      <div className="App">
        Students
        <ul>
          {students}
        </ul>
      </div>
    );
  }
}

export default App;
