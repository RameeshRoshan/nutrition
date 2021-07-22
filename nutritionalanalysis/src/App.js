import React from 'react';
import './App.css';
import Title from './components/Title';
import Picture from './components/Picture';
import Input from './components/Input';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      list: false,
      data: []
    }
    this.input=[];
    this.data=[];
    this.id="4c76fa57";
    this.key="f897caa507ab05ea9f4e6ad2566b0e35";
  }

  onChange=(e)=>{
      this.input= e.target.value.split(',');
  }

  onClear=()=>{
    this.setState({list: false});
  }

  onClick=(e)=>{
    e.preventDefault();
    this.getData();
  }

  getData(){
    Promise.all(this.input.map(input=>{
      return(fetch(`https://api.edamam.com/api/nutrition-data?app_id=${this.id}&app_key=${this.key}&ingr=${input}`)
      .then(response=>{
        return response.json();
      })
      );
    }))
    .then(contents=>{
      this.setState({data:contents});
    })
    .then(this.setState({list:true}))
  }

  render(){
    return (
      <div className="App">
        <Title/>
        <Picture list={this.state.list} data={this.state.data}/>
        <Input list={this.state.list} onClick={this.onClick} onClear={this.onClear} onChange={this.onChange} input={this.input}/>
      </div>
    );
  }
}

export default App;
