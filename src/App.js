import React, { Component } from 'react';
import Cards2 from './components/Cards/Cards2';
import LineChart from './components/Charts/LineChart';
import CountrySelector from './components/CountrySelector/CountrySelector';
import {fetchedData,fetchedDailyData} from './components/api'
import './App.css';
class App extends Component {
  state={
    data:{},
    country:" "
  } 
  async componentDidMount(){
    const fetched = await fetchedData()
        this.setState({data:fetched})
    const fetchedDaily = await fetchedDailyData()
        this.setState({fetchedDaily})
 }

 handleCountryChange = async(country)=>{

  const fetched = await fetchedData(country)
  this.setState({data:fetched})
}

render() { 
  return (
    <>
     <div className='container'>
        <h1 className='name'>COVID 19 TRACKER</h1>
     </div>
     <Cards2 data={this.state.data}/>    
      <div className='line'>
     <CountrySelector handleCountryChange={this.handleCountryChange}/>
     <LineChart data={this.state.fetchedDaily} country={this.state.data}/>
    </div>
    </>
    );
  }
}
 

export default App;
