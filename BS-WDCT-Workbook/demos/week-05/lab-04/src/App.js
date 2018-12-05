import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      program: 'All'
    }
  }

  changeProgram = e => {
    this.setState({
      program: e.target.value
    })
  }

  render() {
    const { students } = this.props
    const { program } = this.state

    const studentList = students.filter((student) => 
      program === 'All' ? true : student.program === program
    )

    return (
      <div className="App">
        <header className="App-header">
          Program: <select onChange={this.changeProgram}>
            <option value="all">All</option>
            <option value="UX">UX</option>
            <option value="Web Dev">Web Dev</option>
          </select>
          <StudentList students={studentList}/>
        </header>
      </div>
    );
  }
}

class StudentList extends Component {
  render() {
    const output = this.props.students.map((student, i) => {
      return <Student key={i} name={student.name} grade={student.grade} program={student.program}/>
    })    
    return (
      <ul>
        {output}
      </ul> 
    )
  }
}

class Student extends Component {
  render() {
    return (
      <li>{this.props.name} {this.props.grade} {this.props.program}</li>
    )
  }
}


export default App;
