import React, { Component } from 'react';
import './App.css';
// 6f2c8665b3fc4ed497b744ea39955d26 id
// 4a9ae37d5a414b2c9bb6620d714e9e6e secret

let hardCodedData ={
	user:{
		name: 'Aldo',
		playlist: [
			{
				name:'My favorites',
				songs: [
				  {name: 'Hello World', duration: 1230}, 
				  {name: 'Do not leave me', duration: 1211}, 
				  {name: 'Rossa', duration:7299}
				]
			},
			{
				name: 'Discover weekly',
				songs:[
				  {name: 'Le song', duration: 2121}, 
				  {name: 'The song', duration: 3321}, 
				  {name: 'Slide', duration: 8992}
				]
			},
			{
				name: 'Rappish',
				songs:[
				  {name: 'Eminem', duration: 3121}, 
				  {name: 'Not afraid', duration: 8821}
				]
			}
		]
	}
}

class AggregatePlaylist extends Component{
  render(){
    return(
      <div style={{width:"40%", display: 'inline-block'}} className="Aggregate">
        <h2 style = {{color: '#fff2'}}> {this.props.playlists.length} playlists </h2>
      </div>
    );
  }
}

class AggregateHour extends Component{
  render(){
  	let allSongs = this.props.playlists.reduce((songs, eachPlaylist) =>{
  		return songs.concat(eachPlaylist.songs)
  	}, [])
  	let totalDuration = allSongs.reduce((sum, eachSong)=>{
  		return sum + eachSong.duration
  	}, 0)

    return(
      <div style={{width:"40%", display: 'inline-block'}} className="Aggregate">
        <h2 style = {{color: '#fff2'}}> {Math.round(totalDuration / 3600)} hours </h2>
      </div>
    );
  }
}

class Search extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{width: "25%", display: 'inline-block'}}>
        <img/>
        <h3> Playlist name </h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
          <li>Song 5</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
	constructor(){
		super();
		this.state = {serverData: {}}
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({serverData: hardCodedData});
		}, 1000)
	}

  render() {
    return (
       <div className="App">
         {
         this.state.serverData.user ? 
         <div>
           <h1> {this.state.serverData.user.name} mySpotify </h1>
 
           <AggregatePlaylist playlists={this.state.serverData.user.playlist}/>
         	 <AggregateHour playlists={this.state.serverData.user.playlist}/>
         
           <Search/>
           <Playlist/>
           <Playlist/>
           <Playlist/>
         </div> : <h2> Loading your Spotify profile... </h2>
         }
       </div>
    );
  }
}

export default App;
