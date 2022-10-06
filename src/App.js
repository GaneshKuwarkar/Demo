import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person.js';

class App extends Component {
  state={
    persons:[
      {name:"Ganesh", age:"24"},
      {name:"Vaishnavi", age:"22"},
      {name:"Shubham", age:"24"}
    ]
  }
  switchNameHandler=()=>{
    this.setState({
      persons:[
        {name:"Ganesh Kuwarkar", age:"24"},
        {name:"Vaishnavi", age:"22"},
        {name:"Shubham", age:"28"}
      ]
    })
  }
  
render(){
  return (
     <div className="App">
     <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
     </div>
   );
  //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, this is Ganesh!!!'))
}
}

export default App;
