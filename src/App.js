import './App.css';
import React from 'react';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Nominations from './components/Nominations/Nominations';

class App extends React.Component {
  state = {
    hidden: true,
    search: '',
    results: [],
    nominations: [],
    disabled: [],
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleNominateClick = (idx) => {
    let arr = [...this.state.nominations]
    let arr2 = [...this.state.results]
    if (arr.length < 5) {
      arr.push(arr2[idx])
      this.setState( state => ({
        disabled: [...state.disabled, idx],
        nominations: arr
      }))      
    }
  }

  handleRemoveClick = (idx) => {
    let arr = [...this.state.nominations]
    let arr3 = [...this.state.disabled]
    arr.splice(idx, 1)
    arr3.splice(idx, 1)
    this.setState({
      nominations: arr,
      disabled: arr3
    })
  }

  fetchData = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${this.state.search}&apikey=d67d7d51`)
    const data = await response.json();
    this.setState({ results: data.Search, disabled: [] })
  }

  handleBanner = () => {
    if (this.state.nominations.length === 5) {
      this.setState({hidden: false})
    } else {
      this.setState({hidden: true})
    }
  }

  // Lifecycle Methods
  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.fetchData()
    }
    if (this.state.nominations !== prevState.nominations) {
      this.handleBanner()
    }
  }

  render(){
    return (
      <div className="App">
        <Banner hidden={this.state.hidden}/>
        <h2>The Shoppies</h2>
        <div className="Grid">
          <Search 
            search={this.state.search}
            handleChange={this.handleChange}
          />
          <Results 
            search={this.state.search}
            results={this.state.results}
            handleNominateClick={this.handleNominateClick}
            disabled={this.state.disabled}
          />
          <Nominations 
            nominations={this.state.nominations}
            handleRemoveClick={this.handleRemoveClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
