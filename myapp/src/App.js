import React, {Component} from 'react';
import Persons from './Persons';
class App extends Component{
  state = {
      persons :[
          
          {name: 'Trevor', age:20, university:"Strathmore",id:1},
          {name: 'Janice', age:20, university:"Strathmore",id:2},
          {name: 'Tinashe', age:21, university:"Strathmore",id:3}


      ]

  }


  render(){

  return (
    <div className="App">
  
      <h1>My first React app!</h1>
        <p>Welcome :)</p>    
        <Persons persons = {this.state.persons}> {/*passing the array as a prop*/}
        {/*props*/}   

       {

       /*   
        <Persons name ="Trevor" age ="20" university="Strathmore"/>
        <Persons name ="Janice" age ="20" university="Strathmore"/>
        <Persons name ="Tinashe" age ="20" university="Strathmore"/>
       */   

        }

    </div>
  );
}
}


export default App;
