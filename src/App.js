import React, { Component } from "react";
import "./App.css";
import data from "./data";
class App extends Component {
constructor(){
    super()
    this.state = {
      index: 0
    };

    this.changePagePrevious = this.changePagePrevious.bind(this)
    this.changePageNext = this.changePageNext.bind(this)
}

changePagePrevious() {
  let newIndex = this.state.index
  if(newIndex === data.length-1){
    newIndex = 24
  }else{
    newIndex--
  }
  this.setState({index: newIndex})
 }

 changePageNext() {
   let newIndex = this.state.index
   if(newIndex === data.length-1){
     newIndex = 0
   } else{
     newIndex++
   }
   this.setState({index: newIndex})
  }


render() {
  let lArrow = "\u003C";
  let rArrow = "\u003E";
  // console.log(data[this.state.index].name.first);
  return (
    <>
      <nav>
        <h3>Home</h3>
      </nav>
      <div id="section">
        <div>
          <h1>
            {data[this.state.index].name.first}{" "}
            {data[this.state.index].name.last}
          </h1>
          <h3>
            From: {data[this.state.index].city},{" "}
            {data[this.state.index].country}
          </h3>
          <h3>Job Title: {data[this.state.index].title}</h3>
          <h3>Employer: {data[this.state.index].employer}</h3>
        </div>
        <div>
          <h3>Favorite Movies:</h3>
          <ol>
            <li>{data[this.state.index].favoriteMovies[0]}</li>
            <li>{data[this.state.index].favoriteMovies[1]}</li>
            <li>{data[this.state.index].favoriteMovies[2]}</li>
          </ol>
        </div>
        <div id="bottom-row">
          <button onClick={this.changePagePrevious} id="left-arrow">{lArrow}Previous</button>
          <div id="buttons">
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
          </div>
          <button onClick={this.changePageNext} id="right-arrow">Next{rArrow}</button>
        </div>
      </div>
    </>
  );
}



}
export default App;
